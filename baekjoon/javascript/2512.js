const input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const requestedBudgets = input[1].split(" ").map(Number);
    const totalBudget = +input[2];
    let start = 0,
      end = totalBudget,
      answer = 0;
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      let maxBudget = 0;
      const sum = requestedBudgets.reduce((acc, curr) => {
        const max = curr > mid ? mid : curr;
        if (max > maxBudget) maxBudget = max;
        return acc + max;
      }, 0);
      if (sum > totalBudget) {
        end = mid - 1;
        continue;
      }
      if (maxBudget > answer) answer = maxBudget;
      start = mid + 1;
    }
    console.log(answer);
  });
