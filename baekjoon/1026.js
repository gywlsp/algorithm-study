//https://www.acmicpc.net/problem/1026

const input = [];

const strToNumArr = (str) => str.split(" ").map((numChar) => Number(numChar));

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const A = strToNumArr(input[1]).sort((a, b) => a - b);
    const B = strToNumArr(input[2]).sort((a, b) => b - a);
    const result = A.reduce((acc, curr, index)=>{
        return acc + curr * B[index]
    }, 0);
    console.log(result);
  });
