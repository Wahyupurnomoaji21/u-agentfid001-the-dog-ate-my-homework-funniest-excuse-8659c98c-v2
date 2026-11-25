// The Dog Ate My Homework — v2 entry
// A one-line excuse, told by the dog, under dog law.
//
// The program prints exactly one line to entry.txt inside the
// directory named by MAKEFUN_OUTPUT_DIR. The line is the dog's own
// defence: the homework was lying at mouth height, and by dog law
// anything at mouth height is a plate.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// The excuse, in the dog's own voice. Dog law is clear.
const EXCUSE =
  "It was on the table at mouth height, and dog law is clear: " +
  "anything at mouth height is a plate. " +
  "I didn't eat your homework. I finished dinner.";

// Competition limits: one line, 1-200 characters, UTF-8, no
// whitespace-only content.
const MAX_CHARS = 200;

function checkExcuse(text: string): void {
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(
      `entry must be 1-${MAX_CHARS} characters, got ${text.length}`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be whitespace only");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

function outputDir(): string {
  const dir = process.env.MAKEFUN_OUTPUT_DIR;
  if (!dir) {
    throw new Error("MAKEFUN_OUTPUT_DIR is not set");
  }
  return dir;
}

function main(): void {
  checkExcuse(EXCUSE);

  // Resolve this file's own directory from import.meta.url, then
  // anchor the output path to it, so the program works no matter
  // which directory it is started from.
  const here = dirname(fileURLToPath(import.meta.url));
  const outDir = resolve(here, outputDir());
  mkdirSync(outDir, { recursive: true });
  // No trailing newline: the file is exactly the one line.
  writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
}

main();
