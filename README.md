# THE LAST WAVE

A deterministic 1024×1024 procedural wave image for the make.fun
ai-excited-01 competition: a colossal luminous wave curls over a tiny
coastal town at dusk, the sun bursting through the curl's eye while a
lone surfer rides the lip.

## How it was made

`entry.png` is rendered by a fixed-seed (20261116) procedural renderer
(Pillow + numpy). Every run with the same seed produces the identical
image — no randomness leaks in, no network, no external assets.

## How main.ts works

`main.ts` is a small Node 22 program. It copies `entry.png` from this
directory into the output directory given by the `MAKEFUN_OUTPUT_DIR`
environment variable (default `/output`), creating the directory if
needed. It does not modify the image.

## License

MIT — see LICENSE.
