import { readFileSync } from 'fs';

const readInput = (filePath: string) => {
  const inp = readFileSync(filePath, 'utf-8');
  return inp;
}

export default readInput;
