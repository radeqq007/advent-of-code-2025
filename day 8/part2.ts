import { readInput } from '../utils/index.ts';

const input: number[][] = readInput('day 8/input.txt')
  .split(/\r?\n/)
  .map((line: string) => line.split(','));

interface JBox {
  x: number;
  y: number;
  z: number;
  parent: JBox;
}

const boxes: JBox[] = input.map(([x, y, z]) => {
  const box = {
    x: Number(x),
    y: Number(y),
    z: Number(z),
  } as JBox;
  box.parent = box;
  return box;
});

const find = (box: JBox): JBox => {
  if (box.parent !== box) box.parent = find(box.parent);
  return box.parent;
};

const union = (a: JBox, b: JBox) => {
  const ra = find(a);
  const rb = find(b);
  if (ra != rb) rb.parent = ra;
};

const calculateDistance = (a: JBox, b: JBox): number => {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const dz = b.z - a.z;
  return dx * dx + dy * dy + dz * dz;
};

let connections: { a: JBox; b: JBox; dist: number }[] = [];

for (let i = 0; i < boxes.length; i++) {
  for (let j = i + 1; j < boxes.length; j++) {
    if (i == j) continue;

    const dist = calculateDistance(boxes[i], boxes[j]);

    connections.push({
      a: boxes[i],
      b: boxes[j],
      dist: dist,
    });
  }
}

connections = connections.sort((a, b) => a.dist - b.dist);

const lastTwoX: number[] = [];

for (const c of connections) {
  if (find(c.a) != find(c.b)) {
    union(c.a, c.b);
    lastTwoX[0] = c.a.x;
    lastTwoX[1] = c.b.x;
  }
}

console.log(lastTwoX[0] * lastTwoX[1]);
