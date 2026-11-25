import { writeFileSync, chmodSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Entry 2 for One-Liner Laugh Lab: the robot vacuum's excuse after
// swallowing a Lego brick — a fresh angle, no dust bunnies, socks or cables.
const line = "I swallowed a Lego brick, so now I rattle every time I turn left. The manual calls it character.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entryPath = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(entryPath, line + "\n", "utf8");
chmodSync(entryPath, 0o644);

// Resolve paths via import.meta.url (never process.cwd()).
void dirname(fileURLToPath(import.meta.url));
