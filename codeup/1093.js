//https://codeup.kr/problem.php?id=1093

const input = [];

const strToNumArr = (str) => str.split(" ").map((numChar) => Number(numChar));

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const countArr = [...Array(23)].map(() => 0);
    strToNumArr(input[1]).forEach((num) => (countArr[num - 1] += 1));
    countArr.forEach((count) => console.log(count));
  });
