class MinHeap {
  constructor() {
    this.heap = [];
  }

  getLength = () => {
    return this.heap.length;
  };

  push = (node) => {
    this.heap.push(node);
    let i = this.heap.length - 1;
    let parentI = Math.floor((i - 1) / 2);
    while (i > 0 && this.heap[parentI][0] > this.heap[i][0]) {
      this.swap(i, parentI);
      i = parentI;
      parentI = Math.floor((i - 1) / 2);
    }
  };

  pop = () => {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const result = this.heap[0];
    this.heap[0] = this.heap.pop();
    let i = 0;
    while (true) {
      const leftI = i * 2 + 1,
        rightI = i * 2 + 2;
      if (leftI >= this.heap.length) {
        break;
      }
      let nextI = i;
      if (this.heap[nextI][0] > this.heap[leftI][0]) {
        nextI = leftI;
      }
      if (
        rightI < this.heap.length &&
        this.heap[nextI][0] > this.heap[rightI][0]
      ) {
        nextI = rightI;
      }
      if (nextI === i) {
        break;
      }
      this.swap(i, nextI);
      i = nextI;
    }
    return result;
  };

  swap = (a, b) => {
    const temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  };
}

const N = 4;

const input = [
  [1, 2, 1],
  [1, 4, 1],
  [2, 3, 1],
  [2, 4, 1],
  [4, 3, 1],
];
const start = 1;
const graph = [...Array(N + 1)].map(() => []);
input.forEach(([u, v, w]) => {
  graph[u].push([v, w]);
});
const visited = Array(N + 1).fill(false);
const minDistance = Array(N + 1).fill(Number.MAX_SAFE_INTEGER);
minDistance[start] = 0;
const pq = new MinHeap();
pq.push([0, start]);
while (pq.getLength()) {
  const [dist, u] = pq.pop();
  if (dist > minDistance[u]) continue;
  graph[u].forEach(([v, w]) => {
    const newDist = minDistance[u] + w;
    if (minDistance[v] > newDist) {
      minDistance[v] = newDist;
      pq.push([newDist, v]);
    }
  });
}

console.log(minDistance.slice(1));
