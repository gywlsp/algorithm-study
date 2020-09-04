//https://codeup.kr/problem.php?id=1064

let input = [];

const strToNumArr = (str) => str.split(" ").map((numChar) => Number(numChar));

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    console.log(Math.min(...strToNumArr(input[0])));
  });
