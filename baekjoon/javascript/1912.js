const input = [];

const strToNumArr = (str) => str.split(" ").map(Number);

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const numList = strToNumArr(input[1]);
    const memo = [];
    numList.forEach((num, index) => {
      memo.push(num + (memo[index - 1] > 0 ? memo[index - 1] : 0));
    });
    console.log(Math.max(...memo));
  });
