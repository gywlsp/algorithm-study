const input = [];
const dr = [1, -1, 0, 0];
const dc = [0, 0, 1, -1];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const [N, M] = input.shift().split(" ").map(Number);
    const maze = input.map((str) => str.split("").map(Number));
    const mark = input.map(() => Array(M).fill(0));

    const queue = [[0, 0]];
    mark[0][0] = 1;
    let r, c;
    while (queue.length !== 0) {
      [r, c] = queue.shift();

      for (let i = 0; i < 4; i++) {
        let nextR = r + dr[i],
          nextC = c + dc[i];
        if (
          nextR < 0 ||
          nextR >= N ||
          nextC < 0 ||
          nextC >= M ||
          !maze[nextR][nextC] ||
          mark[nextR][nextC]
        ) {
          continue;
        }
        mark[nextR][nextC] = mark[r][c] + 1;
        if (nextR === N - 1 && nextC === M - 1) {
          console.log(mark[N - 1][M - 1]);
          process.exit(0);
        }
        queue.push([nextR, nextC]);
      }
    }
  });
