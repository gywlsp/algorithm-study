const input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const N = +input.shift();
    const result = [...Array(N)].map(() => [0, 0]);

    input.forEach((v, i) => {
      const n = +v;
      if (v <= 1) {
        result[i][v] = 1;
        return;
      }
      const memo = [...Array(n + 1)].map(() => [0, 0]);
      (memo[0][0] = 1), (memo[1][1] = 1);
      for (let j = 2; j <= n; j++) {
        memo[j][0] = memo[j - 1][0] + memo[j - 2][0];
        memo[j][1] = memo[j - 1][1] + memo[j - 2][1];
      }
      result[i] = memo[n];
    });
    console.log(result.map((arr) => arr.join(" ")).join("\n"));
  });
