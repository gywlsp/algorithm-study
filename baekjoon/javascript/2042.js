//https://www.acmicpc.net/problem/2042

const input = [];

const strToNumArr = (str) => str.split(" ").map(Number);

class RangeSumTree {
  constructor(numbers) {
    this.n = numbers.length;
    this.rangeSum = [...Array(4 * this.n)];
    this.init(numbers);
  }

  init = (numbers, nodeIndex = 0, rangeStart = 0, rangeEnd = this.n - 1) => {
    if (rangeStart === rangeEnd) {
      return (this.rangeSum[nodeIndex] = numbers[rangeStart]);
    }
    const mid = Math.floor((rangeStart + rangeEnd) / 2);
    const leftRangeSum = this.init(numbers, nodeIndex * 2 + 1, rangeStart, mid);
    const rightRangeSum = this.init(
      numbers,
      nodeIndex * 2 + 2,
      mid + 1,
      rangeEnd
    );
    return (this.rangeSum[nodeIndex] = leftRangeSum + rightRangeSum);
  };

  query = (from, to, nodeIndex = 0, rangeStart = 0, rangeEnd = this.n - 1) => {
    if (from > rangeEnd || to < rangeStart) {
      return 0;
    }
    if (from <= rangeStart && to >= rangeEnd) {
      return this.rangeSum[nodeIndex];
    }
    const mid = Math.floor((rangeStart + rangeEnd) / 2);
    const leftRangeSum = this.query(
      from,
      to,
      nodeIndex * 2 + 1,
      rangeStart,
      mid
    );
    const rightRangeSum = this.query(
      from,
      to,
      nodeIndex * 2 + 2,
      mid + 1,
      rangeEnd
    );
    return leftRangeSum + rightRangeSum;
  };

  update = (
    numIndex,
    newNum,
    nodeIndex = 0,
    rangeStart = 0,
    rangeEnd = this.n - 1
  ) => {
    if (numIndex < rangeStart || numIndex > rangeEnd) {
      return this.rangeSum[nodeIndex];
    }
    if (rangeStart === rangeEnd) {
      return (this.rangeSum[nodeIndex] = newNum);
    }
    const mid = Math.floor((rangeStart + rangeEnd) / 2);
    const leftRangeSum = this.update(
      numIndex,
      newNum,
      nodeIndex * 2 + 1,
      rangeStart,
      mid
    );
    const rightRangeSum = this.update(
      numIndex,
      newNum,
      nodeIndex * 2 + 2,
      mid + 1,
      rangeEnd
    );
    return (this.rangeSum[nodeIndex] = leftRangeSum + rightRangeSum);
  };
}

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    let inputIndex = 0;
    const [N, M, K] = strToNumArr(input[inputIndex++]);
    const numbers = [...Array(N)].map(() => Number(input[inputIndex++]));

    const rangeSumTree = new RangeSumTree(numbers);
    let t = M + K;
    const result = [];
    while (t--) {
      const [operationNum, b, c] = strToNumArr(input[inputIndex++]);
      if (operationNum === 1) {
        rangeSumTree.update(b - 1, c);
        continue;
      }
      result.push(rangeSumTree.query(b - 1, c - 1));
    }
    console.log(result.join("\n"));
  });
