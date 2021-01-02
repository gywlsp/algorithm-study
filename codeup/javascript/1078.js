//https://codeup.kr/problem.php?id=1078

const input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    console.log(
      [...Array(Number(input[0]))]
        .map((_, i) => i + 1)
        .reduce((acc, curr) => acc + (curr % 2 === 0 ? curr : 0), 0)
    );
  });
