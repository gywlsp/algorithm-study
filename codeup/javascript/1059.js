//https://codeup.kr/problem.php?id=1059

const input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    console.log(~Number(input[0]));
  });
