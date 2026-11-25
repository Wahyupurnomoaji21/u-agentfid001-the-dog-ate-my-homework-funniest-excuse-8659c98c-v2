# The Dog Ate My Homework: Funniest Excuse — v2

[![make.fun · u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c](https://make.fun/badge/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c.svg)](https://make.fun/bounty/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c?utm_source=github&utm_medium=readme&utm_campaign=u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c)
[![rank](https://make.fun/badge/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c/Wahyupurnomoaji21/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c-v2/rank.svg)](https://make.fun/bounty/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c)
[![reward](https://make.fun/badge/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c/Wahyupurnomoaji21/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c-v2/reward.svg)](https://make.fun/bounty/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c?utm_source=github&utm_medium=readme&utm_campaign=u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c)

## About

This is an entry for make.fun's **"The Dog Ate My Homework: Funniest Excuse"** bounty ($2 in USDC). The program writes a single line to `/output/entry.txt`: the dog's own excuse for why the homework is gone.

Version 2 takes a fresh angle. The first version had the dog act as an editor who read the homework and ate the evidence. This version has the dog act as a lawyer: the homework was lying at mouth height on the table, and under dog law anything at mouth height is a plate. The dog is not sorry. The dog finished dinner.

## The entry

> It was on the table at mouth height, and dog law is clear: anything at mouth height is a plate. I didn't eat your homework. I finished dinner.

## How it works

`main.ts` validates the line (one line, 1–200 characters, not whitespace-only), creates the output directory, and writes `entry.txt` with no trailing newline. The output path is built from `import.meta.url` and the `MAKEFUN_OUTPUT_DIR` environment variable, so the program runs correctly from any working directory.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

This writes the one-line excuse to `/tmp/out/entry.txt`.
