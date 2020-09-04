//https://codeup.kr/problem.php?id=1032

let input = [];
const hexAlphabet = ["A", "B", "C", "D", "E", "F"];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    let result = "";
    const n = Number(input[0]);
    let q = n;
    let r = 0;
    while (q !== 0) {
      r = q % 16;
      result = (r >= 10 ? hexAlphabet[r % 10] : r) + result;
      q = Math.floor(q / 16);
    }
    console.log(result);
  });
