// this solution sucks but idc if it works it works

import { readInput } from '../utils/index.ts';

const input: string[] = readInput('day 1/input.txt')
  .trim()
  .split('\n');

const startingNumber: number = 50;
const maxNumber: number = 99;

let current: number = startingNumber;

let password: number = 0;

const check = () => {
  current = (current % (maxNumber + 1) + maxNumber + 1) % (maxNumber + 1);
  if (current == 0) {
    password++;
  }
}

for (const step of input) {
  const direction = step[0];
  const value = parseInt(step.slice(1));

  if (direction === 'R') { 
    for (let i = 0; i < value; i++) {
      current++;
      check()
    }
  } else {
    for (let i = 0; i < value; i++) {
      current--;
      check()
    }
  }
}

console.log('Password: ', password);
