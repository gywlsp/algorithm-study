//https://codeup.kr/problem.php?id=1098

const input = [];

const strToNumArr = (str) => str.split(" ").map(Number);

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    let inputIndex = 0;
    const [h, w] = strToNumArr(input[inputIndex++]);
    const result = [...Array(h)].map(() => [...Array(w)].map(() => 0));
    let t = Number(input[inputIndex++]);
    while (t--) {
      let [l, d, x, y] = strToNumArr(input[inputIndex++]);
      x--;
      y--;
      while (l--) {
        if (d === 0) result[x][y++] = 1;
        if (d === 1) result[x++][y] = 1;
      }
    }
    result.forEach((arr) => console.log(arr.join(" ")));
  });
