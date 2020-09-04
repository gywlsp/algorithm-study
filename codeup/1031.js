//https://codeup.kr/problem.php?id=1031

let input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    let result = "";
    const n = Number(input[0]);
    let q = n;
    while (q !== 0) {
      result = (q % 8) + result;
      q = Math.floor(q / 8);
    }
    console.log(result);
  });
