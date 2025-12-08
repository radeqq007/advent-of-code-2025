import { readInput } from '../utils/index.ts';

const input = readInput('day 6/input.txt')
  .split(/\r?\n/)
  .map((line: string) => line.split(''));

const operations: string[] = input.at(-1).filter((op: string) => op != ' ');
const numbers: string[][] = input.slice(0, -1);

let segmentId: number = 0;
let sum: number = 0;
let nums: number[] = [];

for (let col = 0; col < numbers[0].length; col++) {
  let num: string = '';
  for (let row = 0; row < input.length - 1; row++) {
    num += numbers[row][col];
  }
  num = num.trim();

  if (num != '') nums.push(parseInt(num));

  if (num == '' || col === numbers[0].length - 1) {
    switch (operations[segmentId]) {
      case '+':
        sum += nums.reduce((a, b) => (a += b));
        break;
      case '-':
        sum += nums.reduce((a, b) => (a -= b));
        break;
      case '*':
        sum += nums.reduce((a, b) => (a *= b));
        break;
      case '/':
        sum += nums.reduce((a, b) => (a /= b));
        break;
    }

    segmentId++;
    nums = [];
  }
}

console.log(sum);
