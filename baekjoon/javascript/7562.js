const input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    let inputIndex = 0;
    let t = +input[inputIndex++];
    const dr = [-2, -2, -1, -1, 1, 1, 2, 2];
    const dc = [1, -1, 2, -2, 2, -2, 1, -1];

    while (t--) {
      const N = +input[inputIndex++];
      const [startR, startC] = input[inputIndex++].split(" ").map(Number);
      const [endR, endC] = input[inputIndex++].split(" ").map(Number);
      const visited = [...Array(N)].map(() => Array(N).fill(false));
      const queue = [[startR, startC, 0]];
      visited[startR][startC] = true;
      while (queue.length) {
        const [currR, currC, moveCnt] = queue.shift();
        if (currR === endR && currC === endC) {
          console.log(moveCnt);
          break;
        }
        for (let i = 0; i < 8; i++) {
          const nextR = currR + dr[i];
          const nextC = currC + dc[i];
          if (
            nextR < 0 ||
            nextR >= N ||
            nextC < 0 ||
            nextC >= N ||
            visited[nextR][nextC]
          )
            continue;
          visited[nextR][nextC] = true;
          queue.push([nextR, nextC, moveCnt + 1]);
        }
      }
    }
  });
