const input = [];
const strToNumArr = (str) => str.split(" ").map(Number);

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const sortedTList = strToNumArr(input[1]).sort((a, b) => a - b);
    let minTSum = 0,
      currT = 0;
    sortedTList.forEach((t) => {
      currT += t;
      minTSum += currT;
    });
    console.log(minTSum);
  });
