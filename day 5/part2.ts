import { readInput } from '../utils/index.ts';

let ranges= readInput('day 5/input.txt').split('\n\n')[0].split('\n').map((range: string) => range.split('-')).map((nums: string[]) => nums.map((Number))).sort((a, b) => a[0] - b[0]);

const merged: number[][] = [];
for (const [start, end] of ranges) {
  if (!merged.length || start > merged[merged.length - 1][1] + 1)
    merged.push([start, end]);
  else {
    merged[merged.length - 1][1] = Math.max(
      merged[merged.length - 1][1],
      end
    );
  }
}

let count: number = 0;
for (const [start, end] of merged) {
  count += end + 1 - start
}

console.log(count)