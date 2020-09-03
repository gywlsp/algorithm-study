//https://codeup.kr/problem.php?id=1027

let input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    console.log(
      input[0]
        .split(".")
        .reverse()
        .map((numString, index) => {
          if (index === 2) return "0".repeat(4 - numString.length) + numString;
          return "0".repeat(2 - numString.length) + numString;
        })
        .join("-")
    );
  });
