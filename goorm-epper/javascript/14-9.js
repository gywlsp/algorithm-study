const input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const N = +input.shift();
    const memo = [];
    for (let n = 1; n <= N; n++) {
      memo.push(Array(n).fill(0));
    }
    input.forEach((str, r) => {
      const values = str.split(/\s+/).map(Number);
      values.forEach((v, c) => {
        const m1 = (memo[r - 1] && memo[r - 1][c - 1]) || 0;
        const m2 = (memo[r - 1] && memo[r - 1][c]) || 0;
        memo[r][c] = v + Math.max(m1, m2);
      });
    });
    console.log(Math.max(...memo[N - 1]));
    process.exit();
  });
