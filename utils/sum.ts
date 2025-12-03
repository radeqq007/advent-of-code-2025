const sum = (nums: number[]): number => {
  return nums.reduce((sum, num) => (sum += num));
}

export default sum;
