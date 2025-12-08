import { readInput } from '../utils/index.ts';

const input: string[][] = readInput('day 7/input.txt')
  .split(/\r?\n/)
  .map((line: string) => line.split(''));

const beamStartCol = input[0].indexOf('S');

const memo = new Map<string, number>(); // "row,col"

type timeline = {
  leftTimeline?: timeline;
  rightTimeline?: timeline;
};

const generateTimeline = (row: number, col: number): number => {
  const key = `${row},${col}`;
  if (memo.has(key)) return memo.get(key)!;

  if (row + 1 >= input.length) {
    return 1;
  }

  let ways = 0;

  if (input[row][col] === '^') {
    if (col > 0) ways += generateTimeline(row + 1, col - 1);
    if (col < input[0].length - 1) ways += generateTimeline(row + 1, col + 1);
  } else {
    ways += generateTimeline(row + 1, col);
  }

  memo.set(key, ways);
  return ways;
};

let count = generateTimeline(1, beamStartCol);

console.log(count);
