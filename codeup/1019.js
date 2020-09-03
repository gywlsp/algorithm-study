//https://codeup.kr/problem.php?id=1019

let input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const date = input[0].split(".");
    const result = date.map((numString) => {
      if (numString.length === 1) return `0${numString}`;
      return numString;
    });
    console.log(result.join("."));
  });
