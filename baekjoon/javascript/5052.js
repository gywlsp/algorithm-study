//https://www.acmicpc.net/problem/5052

const input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    let inputIndex = 0;
    let t = Number(input[inputIndex++]);
    while (t--) {
      const N = Number(input[inputIndex++]);
      const sortedNumbers = [...Array(N)].map(() => input[inputIndex++]).sort();
      let prevNumLength = 0,
        result = "YES";
      for (let i = 0; i < N; i++) {
        if (sortedNumbers[i].slice(0, prevNumLength) === sortedNumbers[i - 1]) {
          result = "NO";
          break;
        }
        prevNumLength = sortedNumbers[i].length;
      }
      console.log(result);
    }
  });
