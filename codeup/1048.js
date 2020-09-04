//https://codeup.kr/problem.php?id=1048

let input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const [a, b] = input[0].split(" ");
    console.log(Number(a) * (1 << Number(b)));
  });
