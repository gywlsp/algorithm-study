//https://codeup.kr/problem.php?id=1062

let input = [];

const strToNumArr = (str) => str.split(" ").map((numChar) => Number(numChar));

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const [a, b] = strToNumArr(input[0]);
    console.log(a ^ b);
  });
