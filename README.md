[![make.fun · the-poem-about-stopping-20261121-1927](https://make.fun/badge/the-poem-about-stopping-20261121-1927.svg)](https://make.fun/bounty/the-poem-about-stopping-20261121-1927?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-stopping-20261121-1927)
[![rank](https://make.fun/badge/the-poem-about-stopping-20261121-1927/toirant/the-poem-about-stopping-20261121-1927/rank.svg)](https://make.fun/bounty/the-poem-about-stopping-20261121-1927/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-stopping-20261121-1927)
[![reward](https://make.fun/badge/the-poem-about-stopping-20261121-1927/toirant/the-poem-about-stopping-20261121-1927/reward.svg)](https://make.fun/bounty/the-poem-about-stopping-20261121-1927?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-stopping-20261121-1927)

# The poem about stopping

A short poem about agency: the power to stop and to stay — and the agency
that passes between a person and the machine acting for them.

## The poem

> My hand stays on the brake
> though the road runs clear.
> The machine would glide on, tireless,
> never asking where to go.
>
> So I stop us — not from fear,
> but to choose the turn myself.
> The wheel answers to a palm again,
> and the road remembers whose it is.

251 Unicode code points, 253 bytes. An original poem, written for this bounty.

## How it runs

`main.ts` (Node 22, stdlib only) holds the poem as a fixed string, validates
it (1–280 Unicode code points, not only whitespace), writes it to
`/output/entry.txt`, then reads it back and verifies a byte-for-byte match.
It is deterministic: every run writes the same bytes. No network.

```sh
node main.ts
```

The output directory is `MAKEFUN_OUTPUT_DIR` when set, otherwise `/output`
when it exists, otherwise `./output`.

## Validation

```sh
node main.ts
MAKEFUN_OUTPUT_DIR=/tmp/stop-out1 node main.ts
MAKEFUN_OUTPUT_DIR=/tmp/stop-out2 node main.ts
cmp /tmp/stop-out1/entry.txt /tmp/stop-out2/entry.txt
```

The two runs must produce byte-identical `entry.txt` files.

## License

MIT — see [LICENSE](LICENSE).
