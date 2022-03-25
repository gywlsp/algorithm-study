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
    while (i > 0 && this.heap[parentI][1] > this.heap[i][1]) {
      this.swap(i, parentI);
      i = parentI;
      parentI = Math.floor((i - 1) / 2);
    }
  };

  shift = () => {
    if (this.heap.length === 1) {
      return this.heap.shift();
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
      if (this.heap[nextI][1] > this.heap[leftI][1]) {
        nextI = leftI;
      }
      if (
        rightI < this.heap.length &&
        this.heap[nextI][1] > this.heap[rightI][1]
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

function solution(jobs) {
  const jobsCnt = jobs.length;
  jobs.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const pq = new MinHeap();
  let t,
    sum = 0;
  while (pq.getLength() || jobs.length) {
    if (!pq.getLength()) {
      const nextJob = jobs.shift();
      t = nextJob[0];
      pq.push(nextJob);
      continue;
    }
    const [start, len] = pq.shift();
    sum += t - start + len;
    t += len;
    while (jobs.length && jobs[0][0] <= t) {
      pq.push(jobs.shift());
    }
  }
  return Math.floor(sum / jobsCnt);
}
