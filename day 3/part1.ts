import { readInput, sum } from '../utils/index.ts';

const maxInRangeIdx = (arr: number[], start: number, end: number): number => {
  let maxIndex = start;

  for (let i = start + 1; i < end; i++)
    if (arr[i] > arr[maxIndex]) maxIndex = i;

  return maxIndex;
};

const input: number[][] = readInput('day 3/input.txt')
  .split('\n')
  .map((bank: string) => bank.split('').map(ch => Number(ch)));

const maxValues: number[] = [];

for (const bank of input) {
  const maxIdx = maxInRangeIdx(bank, 0, bank.length - 1);
  const maxIdx2 = maxInRangeIdx(bank, maxIdx + 1, bank.length);

  maxValues.push(parseInt(`${bank[maxIdx]}${bank[maxIdx2]}`));
}

console.log(`Total output: ${sum(maxValues)}`);
