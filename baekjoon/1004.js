//https://www.acmicpc.net/problem/1004

const input = [];

const strToNumArr = (str) => str.split(" ").map((numChar) => Number(numChar));

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function(line) {
    input.push(line.trim());
  })
  .on("close", function() {
    let inputIndex = 0;
    const t = Number(input[inputIndex++]);
    for (let i = 0; i < t; i++) {
      let count = 0;
      const positions = input[inputIndex++]
        .split(" ")
        .map(element => Number(element));
      const [startX, startY, endX, endY] = positions;

      const pSysNum = Number(input[inputIndex++]);
      for (let j = 0; j < pSysNum; j++) {
        const [cx, cy, r] = strToNumArr(input[inputIndex++]);
        const startD = Math.sqrt(
          Math.pow(startX - cx, 2) + Math.pow(startY - cy, 2)
        );
        const endD = Math.sqrt(
          Math.pow(endX - cx, 2) + Math.pow(endY - cy, 2)
        );
        if ((startD < r && endD > r) || (startD > r && endD < r)) count++;
      }
      console.log(count);
    }
  });
