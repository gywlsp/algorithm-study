const input = [];

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  getSize = () => {
    return this.heap.length;
  };

  getTop = () => {
    return this.heap[0];
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
    input.push(Number(line.trim()));
  })
  .on("close", function () {
    const maxHeap = new MaxHeap();
    const minHeap = new MaxHeap();
    const result = [];
    input.splice(0, 1);
    input.forEach((num) => {
      if (maxHeap.getSize() === minHeap.getSize()) {
        maxHeap.push(num);
      } else {
        minHeap.push(-num);
      }

      if (maxHeap.getTop() > -minHeap.getTop()) {
        const minHeapTop = minHeap.pop();
        const maxHeapTop = maxHeap.pop();
        maxHeap.push(-minHeapTop);
        minHeap.push(-maxHeapTop);
      }
      result.push(maxHeap.getTop());
    });
    console.log(result.join("\n"));
  });
