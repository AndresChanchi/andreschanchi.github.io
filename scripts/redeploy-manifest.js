import fs from "fs";
import { TurboFactory } from "@ardrive/turbo-sdk";

async function redeployManifest() {
  // 1. Verificar wallet.json
  if (!fs.existsSync("./wallet.json")) {
    throw new Error("No se encuentra wallet.json en la raíz del proyecto");
  }
  const jwk = JSON.parse(fs.readFileSync("./wallet.json", "utf8"));

  // 2. Inicializar Turbo
  const turbo = TurboFactory.authenticated({ privateKey: jwk });

  // 3. Leer tamaño y contenido del manifest
  const size = fs.statSync("manifest.json").size;
  const streamFactory = () => fs.createReadStream("manifest.json");

  // 4. Subir solo el manifest.json
  const result = await turbo.uploadFile({
    fileStreamFactory: streamFactory,
    fileSizeFactory: () => size,
    dataItemOpts: {
      tags: [
        { name: "Content-Type", value: "application/x.arweave-manifest+json" },
      ],
    },
  });

  console.log("🔄 Manifest redeploy complete!");
  console.log("New manifest TX ID:", result.id);
}

redeployManifest().catch((err) => {
  console.error("Error al redeployar manifest:", err);
  process.exit(1);
});
