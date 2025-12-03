import { readInput, sum } from '../utils/index.ts';

const maxInRangeIdx = (arr: number[], start: number, end: number): number => {
  let maxIndex = start;

  for (let i = start + 1; i < end; i++)
    if (arr[i] > arr[maxIndex]) maxIndex = i;

  return maxIndex;
};

const input: number[][] = readInput('day 3/input.txt')
  .split('\r\n')
  .map((bank: string) => bank.split('').map(ch => Number(ch)));

const maxValues: number[] = [];

for (const bank of input) {
  let maxIdxs = [];

  for (let i = 12; i > 0; i--) {
    const maxIdx = maxInRangeIdx(
      bank,
      maxIdxs.length > 0 ? maxIdxs[maxIdxs.length - 1] + 1 : 0,
      bank.length - (i - 1)
    );
    maxIdxs.push(maxIdx);
  }

  let output = '';
  for (const idx of maxIdxs) {
    output += `${bank[idx]}`;
  }

  maxValues.push(parseInt(output));
}

console.log(`Total output: ${sum(maxValues)}`);
