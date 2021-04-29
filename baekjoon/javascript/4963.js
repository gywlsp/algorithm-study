//https://www.acmicpc.net/problem/4963

const input = [];

const dList = [-1, 0, 1];

const strToNumArr = (str) => str.split(" ").map(Number);

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const result = [];
    while (input.length) {
      const [w, h] = strToNumArr(input.shift());
      if (w === 0 && h === 0) {
        break;
      }

      let t = h;
      const MAP = [];
      while (t--) {
        MAP.push(strToNumArr(input.shift()));
      }
      const visited = MAP.map(() => Array(w).fill(false));

      let count = 0;
      while (true) {
        let start;
        for (let r = 0; r < h; r++) {
          for (let c = 0; c < w; c++) {
            if (MAP[r][c] && !visited[r][c]) {
              start = [r, c];
              break;
            }
          }
        }
        if (!start) {
          break;
        }

        count++;
        const queue = [start];
        visited[start[0]][start[1]] = true;
        while (queue.length) {
          const [r, c] = queue.shift();
          for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
              const nextR = r + dList[i];
              const nextC = c + dList[j];
              if (
                nextR < 0 ||
                nextR >= h ||
                nextC < 0 ||
                nextC >= w ||
                !MAP[nextR][nextC] ||
                visited[nextR][nextC]
              ) {
                continue;
              }
              visited[nextR][nextC] = true;
              queue.push([nextR, nextC]);
            }
          }
        }
      }
      result.push(count);
    }
    console.log(result.join("\n"));
  });
