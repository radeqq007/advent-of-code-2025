import { readInput } from '../utils/index.ts';

const input: string[][] = readInput('day 7/input.txt')
  .split(/\r?\n/)
  .map((line: string) => line.split(''));

const beamStartCol = input[0].indexOf('S');
let beams: number[] = [beamStartCol];

let count: number = 0;

for (let row = 1; row < input.length; row++) {
  for (const beamCol of beams) {
    if (input[row][beamCol] === '^') {
      beams = beams.filter(val => val != beamCol);
      if (!beams.includes(beamCol - 1)) beams.push(beamCol - 1);
      if (!beams.includes(beamCol + 1)) beams.push(beamCol + 1);
      count++;
    }
  }
}

console.log(count);
