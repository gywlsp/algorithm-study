const input = [];

const strToNumArr = (str) => str.split("").map(Number);
const drList = [1, -1, 0, 0];
const dcList = [0, 0, 1, -1];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const N = Number(input.shift());
    const map = input.map(strToNumArr);
    const result = [];

    while (true) {
      let start;
      for (let r = 0; r < N; r++) {
        for (let c = 0; c < N; c++) {
          if (map[r][c] === 1) {
            start = [r, c];
            break;
          }
        }
        if (start) {
          break;
        }
      }

      if (!start) {
        break;
      }

      const queue = [start];
      map[start[0]][start[1]] = 0;
      let count = 1;
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
            !map[nextR][nextC]
          ) {
            continue;
          }
          map[nextR][nextC] = 0;
          queue.push([nextR, nextC]);
          count++;
        }
      }
      result.push(count);
    }

    console.log(result.length);
    console.log(result.sort((a, b) => a - b).join("\n"));
  });
