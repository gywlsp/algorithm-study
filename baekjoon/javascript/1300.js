const input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(+line.trim());
  })
  .on("close", function () {
    const [N, K] = input;
    let low = 1,
      high = K,
      result = -1;
    while (low <= high) {
      let count = 0;
      let mid = Math.floor((low + high) / 2);
      for (let i = 1; i <= N; i++) {
        count += Math.min(Math.floor(mid / i), N);
      }
      if (count < K) {
        low = mid + 1;
        continue;
      }
      result = mid;
      high = mid - 1;
    }
    console.log(result);
  });
