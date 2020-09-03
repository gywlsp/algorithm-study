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
        .map(
          (numString, index) =>
            "0".repeat((index === 2 ? 4 : 2) - numString.length) + numString
        )
        .join("-")
    );
  });
