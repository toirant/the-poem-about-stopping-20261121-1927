// The poem about stopping — a short poem about agency:
// the power to stop and to stay, and the agency that passes
// between a person and the machine acting for them.
//
// The poem is a fixed string. Nothing is fetched, nothing is random,
// so every run writes the same bytes to /output/entry.txt.
//
// Revision: "never asking where to go" — the machine has no
// destination of its own, which is the point of the stop.

const POEM = `My hand stays on the brake
though the road runs clear.
The machine would glide on, tireless,
never asking where to go.

So I stop us — not from fear,
but to choose the turn myself.
The wheel answers to a palm again,
and the road remembers whose it is.`;

// The gate: 1–280 Unicode code points, and not only whitespace.
const codePoints = [...POEM].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`poem must be 1–280 code points, got ${codePoints}`);
}
if (POEM.trim().length === 0) {
  throw new Error("poem must not be only whitespace");
}

// Resolve the output directory: an explicit override wins, then the
// mounted /output when it exists, otherwise a local ./output.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir =
  process.env.MAKEFUN_OUTPUT_DIR ??
  (existsSync("/output") ? "/output" : "./output");

// Create the directory if needed. Never remove it: the grader mounts
// /output and runs unprivileged, so deleting it would fail the run.
mkdirSync(outputDir, { recursive: true });

const outPath = join(outputDir, "entry.txt");
writeFileSync(outPath, POEM, "utf8");

// Read it back and verify the written bytes match the poem exactly.
const written = readFileSync(outPath, "utf8");
if (written !== POEM) {
  throw new Error("entry.txt does not match the poem");
}

console.log(`wrote ${outPath} (${codePoints} code points)`);
