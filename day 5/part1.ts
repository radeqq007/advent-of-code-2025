import { readInput } from '../utils/index.ts';

let [ranges, available]: any = readInput('day 5/input.txt').split('\n\n');
ranges = ranges.split('\n').map((range: string) => range.split('-')).map((nums: string[]) => nums.map((Number)));
available = available.split('\n').map(Number)

let count: number = 0
for (let number of available) {
  for (let [start, end] of ranges) {
    if (number >= start && number <= end) {
      count++
      break;
    }
  }
}

console.log(count)
