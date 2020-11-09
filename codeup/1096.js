//https://codeup.kr/problem.php?id=1096

const input = [];

const result = [...Array(19)].map(() => [
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
]);

const strToNumArr = (str) => str.split(" ").map((numChar) => Number(numChar));

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    let inputIndex = 0;
    let t = Number(input[inputIndex++]);
    while (t--) {
      const [x, y] = strToNumArr(input[inputIndex++]);
      result[x - 1][y - 1] = 1;
    }
    result.forEach((arr) => console.log(arr.join(" ")));
  });
