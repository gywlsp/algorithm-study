const input = [];

const strToNumArr = (str) => str.split(" ").map(Number);

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  getSize = () => {
    return this.heap.length;
  };

  push = (node) => {
    this.heap.push(node);
    let i = this.heap.length - 1;
    let parentI = Math.floor((i - 1) / 2);
    while (i > 0 && this.heap[parentI] < this.heap[i]) {
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
      if (this.heap[nextI] < this.heap[leftI]) {
        nextI = leftI;
      }
      if (rightI < this.heap.length && this.heap[nextI] < this.heap[rightI]) {
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
    let inputIndex = 0;
    const [N, K] = strToNumArr(input[inputIndex++]);
    let t = N;
    const jewerlies = [];
    while (t--) {
      const jewerly = strToNumArr(input[inputIndex++]);
      jewerlies.push(jewerly);
    }

    t = K;
    const bags = [];
    while (t--) {
      const bag = Number(input[inputIndex++]);
      bags.push(bag);
    }

    jewerlies.sort((a, b) => a[0] - b[0]);
    bags.sort((a, b) => a - b);

    const pq = new MaxHeap();
    let result = 0,
      index = 0;
    bags.forEach((bag) => {
      while (index < N && jewerlies[index][0] <= bag) {
        pq.push(jewerlies[index++][1]);
      }
      if (pq.getSize()) {
        result += pq.pop();
      }
    });

    console.log(result);
  });
