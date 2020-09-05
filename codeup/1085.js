//https://codeup.kr/problem.php?id=1085

let input = [];

const strToNumArr = (str) => str.split(" ").map((numChar) => Number(numChar));

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const [h, b, c, s] = strToNumArr(input[0]);
    console.log(((h * b * c * s) / (8 * (1 << 20))).toFixed(1));
  });
