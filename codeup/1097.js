//https://codeup.kr/problem.php?id=1097

let input = [];

const toggle = (x, y) => {
  result[x][y] = result[x][y] === 0 ? 1 : 0;
};

const result = [];

const strToNumArr = (str) => str.split(" ").map((numChar) => Number(numChar));

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    let inputIndex = 0;
    for (i = 0; i < 19; i++) {
      result.push(strToNumArr(input[inputIndex++]));
    }

    let t = input[inputIndex++];
    while (t--) {
      const [x, y] = strToNumArr(input[inputIndex++]);
      for (i = 0; i < 19; i++) {
        toggle(x - 1, i);
        toggle(i, y - 1);
      }
    }
    result.forEach((arr) => console.log(arr.join(" ")));
  });
