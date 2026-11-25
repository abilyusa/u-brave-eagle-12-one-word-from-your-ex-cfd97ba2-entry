// SPDX-License-Identifier: MIT
// One Word From Your Ex — entry program.
//
// Writes exactly one word to $MAKEFUN_OUTPUT_DIR/entry.txt
// (fallback /output). Deterministic, no network, no reads
// outside this repository. The word is checked against the
// competition gate (UTF-8, 1-24 characters, exactly one word,
// not only whitespace) before anything is written, so a bad
// word fails loudly here instead of failing the gate.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The word my ex would use to describe me: funny because it is
// specific and self-aware, painful because it is true, and it
// lands instantly with no explanation needed.
const WORD: string = "manchild";

if (!/^\S+$/.test(WORD) || [...WORD].length < 1 || [...WORD].length > 24) {
  throw new Error("entry word fails the 1-24 character single-word gate");
}

const outDir: string = process.env.MAKEFUN_OUTPUT_DIR?.trim() || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
