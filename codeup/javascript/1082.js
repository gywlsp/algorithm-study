//https://codeup.kr/problem.php?id=1082

const input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const inputNum = parseInt(input[0], 16);
    [...Array(15)]
      .map((_, i) => i + 1)
      .forEach((n) =>
        console.log(
          `${input[0]}*${n.toString(16)}=${(inputNum * n).toString(16)}`
        )
      );
  });
