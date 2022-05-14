const input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const N = +input[0];
    const numbers = input[1].split(" ").map(Number);
    numbers.unshift(0);
    const memo = Array(N + 1).fill(0);
    for (let i = 1; i <= N; i++) {
      for (let n = 1; n <= N; n++) {
        if (i - n < 0) break;
        memo[i] = Math.max(memo[i], numbers[n] + memo[i - n]);
      }
    }
    console.log(memo[N]);
  });
