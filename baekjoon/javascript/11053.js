const input = [];

const strToNumArr = (str) => str.split(" ").map(Number);

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const N = Number(input[0]);
    const numList = strToNumArr(input[1]);
    const memo = Array(N).fill(1);

    numList.forEach((num, i) => {
      for (let j = 0; j < i; j++) {
        if (numList[j] < num) {
          memo[i] = Math.max(memo[i], memo[j] + 1);
        }
      }
    });

    console.log(Math.max(...memo));
  });
