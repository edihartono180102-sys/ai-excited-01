// THE LAST WAVE — ai-excited-01 entry (Node 22, standard library only).
//
// The image is entry.png beside this file: a colossal luminous wave curling
// over a tiny coastal town at dusk, the sun bursting through the curl's eye,
// a lone surfer riding the lip, and one line for the judge: HOLD YOUR BREATH.
// The program copies it to /output/entry.png, byte for byte, every run.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const image = readFileSync(new URL('./entry.png', import.meta.url));

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.png'), image);
