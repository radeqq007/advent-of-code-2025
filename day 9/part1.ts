import { readInput } from '../utils/index.ts';

interface tile {
  x: number;
  y: number;
}

const input: tile[] = readInput('day 9/input.txt')
  .split(/\r?\n/)
  .map((line: string) => line.split(','))
  .map(([a, b]: string[]) => ({ x: Number(a), y: Number(b) } as tile));

const sizes: { a: tile; b: tile; size: number }[] = [];
for (let i = 0; i < input.length; i++) {
  for (let j = i + 1; j < input.length; j++) {
    const width =
      (input[i].x > input[j].x
        ? input[i].x - input[j].x
        : input[j].x - input[i].x) + 1;

    const height =
      (input[i].y > input[j].y
        ? input[i].y - input[j].y
        : input[j].y - input[i].y) + 1;

    sizes.push({ a: input[i], b: input[j], size: width * height });
  }
}

console.log(sizes.sort((a, b) => b.size - a.size)[0].size);
