//https://codeup.kr/problem.php?id=1099

const input = [];

const strToNumArr = (str) => str.split(" ").map((numString) => Number(numString));

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const result = input.map((str) => strToNumArr(str));
    let x = 1,
      y = 1;
    while (true) {
      result[y][x] = 9;
      if (result[y][x + 1] === 2) {
        result[y][x + 1] = 9;
        break;
      }
      if (result[y][x + 1] === 0) {
        x++;
        continue;
      }
      if (result[y][x + 1] === 1) {
        if (result[y + 1][x] === 2) {
          result[y + 1][x] = 9;
          break;
        }
        if (result[y + 1][x] === 0) {
          y++;
          continue;
        }
        if (result[y + 1][x] === 1) {
          break;
        }
      }
    }
    result.forEach((arr) => console.log(arr.join(" ")));
  });
