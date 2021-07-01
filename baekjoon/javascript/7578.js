const input = [];

const strToNumArr = (str) => str.split(" ").map(Number);

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const bulkList = [];
    let t = +input[0];
    for (let i = 1; i <= t; i++) {
      bulkList.push(strToNumArr(input[i]));
    }
    const rankList = [];
    for (let i = 0; i < bulkList.length; i++) {
      let count = 0;
      for (let j = 0; j < bulkList.length; j++) {
        if (i === j) {
          continue;
        }
        if (
          bulkList[i][0] < bulkList[j][0] &&
          bulkList[i][1] < bulkList[j][1]
        ) {
          count += 1;
        }
      }
      rankList.push(count + 1);
    }
    console.log(rankList.join("\n"));
  });
