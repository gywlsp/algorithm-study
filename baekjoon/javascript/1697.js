//https://www.acmicpc.net/problem/6603

const input = [];

const strToNumArr = (str) => str.split(" ").map(Number);

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const [START, END] = strToNumArr(input[0]);
    const visitedSet = Array(100001).fill(false);

    const queue = [[START, 0]];
    while (queue.length) {
      const [pos, t] = queue.shift();
      if (visitedSet[pos]) {
        continue;
      }

      visitedSet[pos] = true;
      if (pos === END) {
        console.log(t);
        break;
      }

      if (pos * 2 <= 100000) {
        queue.push([pos * 2, t + 1]);
      }
      if (pos + 1 <= 100000) {
        queue.push([pos + 1, t + 1]);
      }
      if (pos - 1 >= 0) {
        queue.push([pos - 1, t + 1]);
      }
    }
  });
