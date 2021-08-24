//https://www.acmicpc.net/problem/14891

const input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const rotate = (gear, dir) => {
      const temp = gear[0];
      let t = 7,
        i = (8 - dir) % 8;
      while (t--) {
        const next = (i + dir) % 8;
        gear[next] = gear[i];
        i -= dir;
      }
      gear[(8 + dir) % 8] = temp;
    };

    const getGearsToBeRotated = (gears, N, DIR) => {
      const result = [[N, DIR]];
      let leftEnd = false,
        rightEnd = false;
      for (let j = 1; j <= 3; j++) {
        const left = N - j,
          right = N + j;
        const dir = j % 2 ? -DIR : DIR;
        if (!leftEnd) {
          if (!gears[left] || gears[left][2] === gears[left + 1][6]) {
            leftEnd = true;
          } else {
            result.push([left, dir]);
          }
        }
        if (!rightEnd) {
          if (!gears[right] || gears[right][6] === gears[right - 1][2]) {
            rightEnd = true;
          } else {
            result.push([right, dir]);
          }
        }
        if (leftEnd && rightEnd) {
          break;
        }
      }
      return result;
    };

    const gears = input.slice(0, 4).map((str) => str.split("").map(Number));
    let T = +input[4];
    for (let i = 5; i < 5 + T; i++) {
      const [N, DIR] = input[i]
        .split(" ")
        .map((v, i) => (i ? Number(v) : Number(v) - 1));
      const gearsToBeRotated = getGearsToBeRotated(gears, N, DIR);
      gearsToBeRotated.forEach(([n, dir]) => {
        rotate(gears[n], dir);
      });
    }

    const result = gears.reduce(
      (acc, curr, index) => acc + (curr[0] && 1 << index),
      0
    );
    console.log(result);
  });
