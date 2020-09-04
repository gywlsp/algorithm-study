//https://codeup.kr/problem.php?id=1036

let input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    console.log(input[0].charCodeAt(0));
  });
