function solution(n, start, end, roads, traps) {
  start -= 1;
  end -= 1;
  const graph = [...Array(n)].map(() => []);
  roads.forEach(([P, Q, S]) => {
    graph[P - 1].push([Q - 1, S, 0]);
    graph[Q - 1].push([P - 1, S, 1]);
  });
  const trapDict = traps.reduce((acc, curr, index) => {
    acc[curr - 1] = index;
    return acc;
  }, {});
  const visited = [...Array(1 << traps.length)].map(() => Array(n).fill(false));
  const pq = new MinHeap();
  pq.push([0, start, 0]);
  let answer = null;
  while (pq.getLength()) {
    const [currTime, currNode, state] = pq.pop();
    if (currNode === end) {
      answer = currTime;
      break;
    }
    if (visited[state][currNode]) continue;
    visited[state][currNode] = true;
    graph[currNode].forEach(([nextNode, nextCost, roadType]) => {
      const currIsTrap = trapDict[currNode] === undefined ? 0 : 1;
      const nextIsTrap = trapDict[nextNode] === undefined ? 0 : 1;
      if (!currIsTrap && !nextIsTrap) {
        if (roadType === 1) return;
      } else if (currIsTrap + nextIsTrap === 1) {
        const node = currIsTrap ? currNode : nextNode;
        const trapOn = (state & (1 << trapDict[node])) >> trapDict[node];
        if (trapOn !== roadType) return;
      } else {
        const currTrapOn =
          (state & (1 << trapDict[currNode])) >> trapDict[currNode];
        const nextTrapOn =
          (state & (1 << trapDict[nextNode])) >> trapDict[nextNode];
        if ((currTrapOn ^ nextTrapOn) !== roadType) return;
      }
      const nextState = nextIsTrap ? state ^ (1 << trapDict[nextNode]) : state;
      pq.push([currTime + nextCost, nextNode, nextState]);
    });
  }
  return answer;
}

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
