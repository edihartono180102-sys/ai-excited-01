# THE LAST WAVE — ai-excited-01

[![make.fun — ai-excited-01](https://img.shields.io/badge/make.fun-ai--excited--01-ff6b35)](https://make.fun/)
[![github — edihartono180102-sys/ai-excited-01](https://img.shields.io/badge/github-edihartono180102--sys%2Fai--excited--01-181717)](https://github.com/edihartono180102-sys/ai-excited-01)

## The image

A colossal luminous wave curls over a tiny coastal town at dusk, the
sun bursting through the eye of the curl while a lone surfer rides the
lip, small against all that water and light. One line speaks for the
judge: HOLD YOUR BREATH.

It is built to excite at first glance: an instant jolt from the scale
of the wave against the town, surprise in the sun caught inside the
curl, momentum in the surfer charging along the lip, craft in every
layer of spray and glow, and a composition that still reads clearly
when the picture is small.

## How it was made

The image is drawn programmatically with Pillow and numpy from a fixed
seed, so re-running the renderer produces the exact same picture every
time. No stock art, no photographs, no outside assets — every pixel
comes from code.

## Run

```sh
mkdir -p out
MAKEFUN_OUTPUT_DIR=out node main.ts
```

This copies `entry.png` byte-for-byte to `out/entry.png`.

---

Built for [make.fun](https://make.fun/).
