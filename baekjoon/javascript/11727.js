const input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const N = +input[0];
    const memo = Array(N + 1).fill(null);
    memo[1] = 1;
    memo[2] = 3;
    for (let i = 3; i <= N; i++) {
      memo[i] = (memo[i - 1] + memo[i - 2] * 2) % 10007;
    }
    console.log(memo[N]);
  });
