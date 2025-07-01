import fs from "fs";
import { ANT, ArweaveSigner } from "@ar.io/sdk";

async function updateArns() {
  try {
    if (!fs.existsSync("./wallet.json")) {
      throw new Error("Wallet.json not found in the root of your project");
    }
    const jwk = JSON.parse(fs.readFileSync("./wallet.json", "utf8"));

    const ant = ANT.init({
      signer: new ArweaveSigner(jwk),
      processId: "rUhhjPrzbo0LdJPywUKlrAoeWIoFhbmAw0dmRS5tnps",
    });
    const { id: txID } = await ant.setRecord(
      {
        undername: "@",
        transactionId: "bpQDu4k2kOEfLov1SRbEQY2IWaZTFUsCMxLRai2dW1M",
        ttlSeconds: 900,
      },
      {
        tags: [
          {
            name: "Portfolio",
            value: "Portfolio de Andres Chanchi",
          },
        ],
      },
    );
    console.log("\nARNS Update complete 😎");
    console.log(`Transaction Id: ${txID}`);
    console.log(`View your site at: https://andreschanchi.ar.io\n`);
  } catch {
    console.error("Failed to update ARNS", error);
    process.exit(1);
  }
}

updateArns();
