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
    for (let j = 1; j <= cur.length / 2; j++) {
      const pattern = cur.substring(0, j);
      const parts: string[] = [];

      // Break down the string to k parts
      for (let k = 0; k < cur.length; k += pattern.length) {
        parts.push(cur.slice(k, k + pattern.length));
      }

      const allEqual: boolean = parts.every(v => v === parts[0]);

      if (allEqual) {
        invalidNumbers.push(i);
        break;
      }
    }
  }
}

const sum = invalidNumbers.reduce((sum, num) => (sum += num));

console.log(sum);
