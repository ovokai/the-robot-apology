import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = [
  "I'm sorry I sent the signed contract to the wrong Sarah because both contacts were saved as \"Sarah.\"",
  "I learned that a name is not a unique key, so I will check the company before I send it.",
].join("\n");

const outputDir = "/output";

try {
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "entry.txt"), `${entry}\n`, "utf8");
} catch {
  writeFileSync("entry.txt", `${entry}\n`, "utf8");
}
