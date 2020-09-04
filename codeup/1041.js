//https://codeup.kr/problem.php?id=1041

let input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    console.log(String.fromCharCode(input[0].charCodeAt(0) + 1));
  });
