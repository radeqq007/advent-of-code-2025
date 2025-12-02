import { readFileSync } from 'fs';

const input: string[][] = readFileSync('day 2/input.txt', 'utf-8')
  .trim()
  .split(',')
  .map((range: string) => range.split('-'));

const invalidNumbers: number[] = [];

for (const range of input) {
  const start: number = Number(range[0]);
  const end: number = Number(range[1]);

  for (let i = start; i <= end; i++) {
    const cur = i.toString();
    if (cur.length % 2 != 0) continue;

    const halves = [
      cur.substring(0, cur.length / 2),
      cur.substring(cur.length / 2),
    ];

    if (halves[0] == halves[1]) {
      invalidNumbers.push(i);
    }
  }
}

const sum = invalidNumbers.reduce((sum, num) => (sum += num));

console.log(sum);
