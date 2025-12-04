import { readInput } from '../utils/index.ts';

const input: boolean[][] = readInput('day 4/input.txt')
  .split('\n')
  .map(line => line.split(''))
  .map(chars => chars.map(char => char === '@'));


let canBeAccessedCount: number = 0;

let canAnyBeAccessed: boolean = false;
do {
  canAnyBeAccessed = false;
  
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (!input[i][j]) continue;
      
      let count: number = 0;
      if (i != 0) {
        if (input[i-1][j-1]) count++;
        if (input[i-1][j]) count++;
        if (input[i-1][j+1]) count++;
      }
      
      if (j != 0 && input[i][j-1]) count++;
      if (j != input[i].length && input[i][j+1]) count++;
      
      if (i != input.length-1) {
        if (input[i+1][j-1]) count++;
        if (input[i+1][j]) count++;
        if (input[i+1][j+1]) count++;
      } 
      
      if (count < 4) {
        canBeAccessedCount++;
        input[i][j] = false;
        canAnyBeAccessed = true;
      }
    }
  }
} while (canAnyBeAccessed)

console.log(canBeAccessedCount)