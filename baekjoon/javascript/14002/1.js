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

    const max = Math.max(...memo);
    console.log(max);

    let len = max;
    const result = [];
    for (let i = memo.length - 1; i >= 0; i--) {
      if (memo[i] === len) {
        result.unshift(numList[i]);
        len--;
      }
      if (max === 0) {
        break;
      }
    }
    console.log(result.join(" "));
  });
