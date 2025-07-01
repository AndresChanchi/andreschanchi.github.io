import fs from "fs";
import path from "path";
import mime from "mime-types";
import { TurboFactory } from "@ardrive/turbo-sdk";

async function deploy() {
  // 1. Leer y validar wallet.json
  const walletPath = "./wallet.json";
  if (!fs.existsSync(walletPath)) {
    throw new Error("❌ No se encuentra wallet.json en la raíz del proyecto");
  }
  const jwk = JSON.parse(fs.readFileSync(walletPath, "utf8"));

  // 2. Inicializar Turbo con tu clave
  const turbo = TurboFactory.authenticated({ privateKey: jwk });
  const outDir = path.resolve("./out");

  // 3. Construir el objeto base del manifest
  const manifest = {
    manifest: "arweave/paths",
    version: "0.2.0",
    index: { path: "" },
    paths: {},
  };

  // 4. Recorrer recursivamente ./out, subir cada archivo y poblar manifest.paths
  async function walkAndUpload(dir) {
    const entries = fs.readdirSync(dir);
    for (const name of entries) {
      const fullPath = path.join(dir, name);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        await walkAndUpload(fullPath);
      } else {
        const relPath = path
          .relative(outDir, fullPath)
          .split(path.sep)
          .join("/");
        const contentType = mime.lookup(fullPath) || "application/octet-stream";

        // Subir el archivo
        const upload = await turbo.uploadFile({
          fileStreamFactory: () => fs.createReadStream(fullPath),
          fileSizeFactory: () => stat.size,
          dataItemOpts: {
            tags: [{ name: "Content-Type", value: contentType }],
          },
        });

        console.log(`↑ Uploaded ${relPath} → ${upload.id}`);
        manifest.paths[relPath] = { id: upload.id };
      }
    }
  }

  await walkAndUpload(outDir);

  // 5. Detectar y asignar index.html
  if (!manifest.paths["index.html"]) {
    throw new Error("❌ No se encontró index.html dentro de ./out");
  }
  manifest.index.path = "index.html";

  // 6. Escribir el manifest.json local
  fs.writeFileSync("manifest.json", JSON.stringify(manifest, null, 2), "utf8");
  console.log("📑 manifest.json generado.");

  // 7. Subir el manifest JSON
  const stat = fs.statSync("manifest.json");
  const manifestUpload = await turbo.uploadFile({
    fileStreamFactory: () => fs.createReadStream("manifest.json"),
    fileSizeFactory: () => stat.size,
    dataItemOpts: {
      tags: [
        { name: "Content-Type", value: "application/x.arweave-manifest+json" },
      ],
    },
  });

  const manifestId = manifestUpload.id;
  console.log("🔄 Manifest subido correctamente.");
  console.log(`View your deployment at: https://arweave.net/${manifestId}\n`);
}

deploy().catch((err) => {
  console.error("🚨 Error en el deploy:", err);
  process.exit(1);
});
