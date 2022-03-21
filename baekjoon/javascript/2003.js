const input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const [N, M] = input[0].split(" ").map(Number);
    const NUMBERS = input[1].split(" ").map(Number);
    let end = 0,
      sum = NUMBERS[0],
      result = 0;
    for (let start = 0; start < N; start++) {
      while (sum < M && end < N - 1) {
        end++;
        sum += NUMBERS[end];
      }
      if (sum === M) {
        result++;
      }
      sum -= NUMBERS[start];
    }
    console.log(result);
  });
