const input = [];

const drList = [1, -1, 0, 0];
const dcList = [0, 0, 1, -1];
let N, MAP, visited;

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    N = Number(input.shift());
    let maxHeight = 1;
    MAP = input.map((str) =>
      str.split(" ").map((v) => {
        const ret = Number(v);
        if (ret > maxHeight) {
          maxHeight = ret;
        }
        return ret;
      })
    );

    let maxCount = 0;
    visited = MAP.map(() => Array(N).fill(false));
    for (let h = 0; h <= maxHeight; h++) {
      let count = 0;
      for (let r = 0; r < N; r++) {
        for (let c = 0; c < N; c++) {
          if (MAP[r][c] > h && !visited[r][c]) {
            count++;
            bfs(h, r, c);
          }
        }
      }
      if (count > maxCount) {
        maxCount = count;
      }
      visited.forEach((arr) => arr.fill(false));
    }
    console.log(maxCount);
  });

const bfs = (height, row, col) => {
  const queue = [[row, col]];
  visited[row][col] = true;
  while (queue.length) {
    const [r, c] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const nextR = r + drList[i];
      const nextC = c + dcList[i];
      if (
        nextR < 0 ||
        nextR >= N ||
        nextC < 0 ||
        nextC >= N ||
        MAP[nextR][nextC] <= height ||
        visited[nextR][nextC]
      ) {
        continue;
      }
      visited[nextR][nextC] = true;
      queue.push([nextR, nextC]);
    }
  }
};
