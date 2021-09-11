const input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const moneyList = input[1].split(" ").map(Number);
    const memo = Array(moneyList.length).fill(0);
    for (let i = 0; i < moneyList.length; i++) {
      memo[i] = Math.max(
        moneyList[i] + (moneyList[i - 1] || 0) + (memo[i - 3] || 0),
        moneyList[i] + (memo[i - 2] || 0),
        memo[i - 1] || 0
      );
    }
    console.log(memo.pop());
  });
