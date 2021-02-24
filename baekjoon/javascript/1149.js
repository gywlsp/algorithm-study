//https://www.acmicpc.net/problem/1149

const input = [];

const strToNumArr = (str) => str.split(" ").map(Number);

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const N = Number(input.shift());
    const RGB_LIST = input.map(strToNumArr);

    const memo = [...Array(N)];
    RGB_LIST.forEach(([R, G, B], i) => {
      if (i === 0) {
        memo[i] = [R, G, B];
        return;
      }

      memo[i] = [
        R + Math.min(memo[i - 1][1], memo[i - 1][2]),
        G + Math.min(memo[i - 1][0], memo[i - 1][2]),
        B + Math.min(memo[i - 1][0], memo[i - 1][1]),
      ];
    });

    console.log(Math.min(...memo[N - 1]));
  });
