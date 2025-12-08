import { readInput } from '../utils/index.ts';

const input: string[] = readInput('day 1/input.txt')
  .trim()
  .split(/\r?\n/);

const startingNumber: number = 50;
const maxNumber: number = 99;

let current: number = startingNumber;

let password: number = 0;

for (const step of input) {
  const direction = step[0];
  const value = parseInt(step.slice(1));

  if (direction === 'R') {
    current = (current + value) % (maxNumber + 1);
  } else {
    current = (current - value) % (maxNumber + 1);
  }

  if (current === 0) password++;
}

console.log('Password: ', password);
