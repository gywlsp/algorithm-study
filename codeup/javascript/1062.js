//https://codeup.kr/problem.php?id=1062

const input = [];

const strToNumArr = (str) => str.split(" ").map((numString) => Number(numString));

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const [a, b] = strToNumArr(input[0]);
    console.log(a ^ b);
  });
