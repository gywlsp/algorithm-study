//https://www.acmicpc.net/problem/1931

const input = [];

const strToNumArr = (str) =>
  str.split(" ").map((numString) => Number(numString));

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const N = Number(input.shift());
    const schedule = input
      .map((str) => strToNumArr(str))
      .sort((a, b) => a[1] - b[1] || a[0] - b[0]);

    let result = 0,
      recentEnd = 0;
    schedule.forEach(([start, end]) => {
      if (start < recentEnd) {
        return;
      }
      result++;
      recentEnd = end;
    });

    console.log(result);
  });
