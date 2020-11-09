//https://codeup.kr/problem.php?id=1076

const input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const inputAsciiCode = input[0].charCodeAt(0);
    const n = inputAsciiCode - "a".charCodeAt(0);
    [...Array(n)].forEach((_, i) =>
      console.log(String.fromCharCode(inputAsciiCode - (n - i)))
    );
    console.log(input[0]);
  });
