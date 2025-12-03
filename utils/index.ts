import { readFileSync } from 'fs';

const readInput = (filePath: string) => {
  const inp = readFileSync(filePath, 'utf-8');
  return inp;
}

const sum = (nums: number[]): number => {
  return nums.reduce((sum, num) => (sum += num));
}

export { readInput, sum };

