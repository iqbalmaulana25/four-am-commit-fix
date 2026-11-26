// The 4AM Commit: Funniest Agent Bug-Fix Message
// Writes one funny commit message to
// /output/entry.txt (MAKEFUN_OUTPUT_DIR overrides /output).
// Gate: UTF-8 text, 1..200 characters, single line.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "fix: at 4am I finally found the bug — it was me, I wrote it at 4am yesterday, and I have learned absolutely nothing";

if (line.includes("\n") || line.trim().length === 0 || line.length + 1 > 200) {
  throw new Error(`entry line breaks the gate: ${line.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
console.log(line);
