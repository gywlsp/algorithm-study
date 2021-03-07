const input = [];

const strToNumArr = (str) => str.split(" ").map(Number);

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
    while (i > 0 && this.heap[parentI] > this.heap[i]) {
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
      if (leftI >= this.heap.size) {
        break;
      }
      let nextI = i;
      if (this.heap[nextI] > this.heap[leftI]) {
        nextI = leftI;
      }
      if (rightI < this.heap.length && this.heap[nextI] > this.heap[rightI]) {
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

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const [N, M] = strToNumArr(input.shift());
    const graph = [];
    const inDegrees = Array(N + 1).fill(0);
    for (let i = 0; i <= N; i++) {
      graph.push([]);
    }

    input.forEach((str) => {
      const [prev, next] = strToNumArr(str);
      graph[prev].push(next);
      inDegrees[next] += 1;
    });

    const pq = new MinHeap();
    for (let n = 1; n <= N; n++) {
      if (inDegrees[n] === 0) {
        pq.push(n);
      }
    }

    const result = [];
    while (pq.getLength()) {
      const n = pq.pop();
      result.push(n);
      graph[n].forEach((v) => {
        inDegrees[v] -= 1;
        if (!inDegrees[v]) {
          pq.push(v);
        }
      });
    }

    console.log(result.join(" "));
  });
