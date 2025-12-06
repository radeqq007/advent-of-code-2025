import { readInput } from '../utils/index.ts';

const input = readInput('day 6/input.txt')
  .split('\n')
  .map((line: string) => line.split(' ').filter(val => val != ''));

const operations: string[] = input.at(-1);
const numbers: number[][] = input
  .slice(0, -1)
  .map((row: number[]) => row.map(val => Number(val)));

let sum: number = 0;

for (let col = 0; col < numbers[0].length; col++) {
  const nums: number[] = [];
  const operation: string = operations[col];
  for (let row = 0; row < input.length - 1; row++) {
    nums.push(numbers[row][col]);
  }

  switch (operation) {
    case '+':
      sum += nums.reduce((prev, cur) => (prev += cur));
      break;
    case '-':
      sum += nums.reduce((prev, cur) => (prev -= cur));
      break;
    case '*':
      sum += nums.reduce((prev, cur) => (prev *= cur));
      break;
    case '/':
      sum += nums.reduce((prev, cur) => (prev /= cur));
      break;
  }
}

console.log(sum);
