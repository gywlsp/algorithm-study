//https://www.acmicpc.net/problem/1010

const input = [];
const strToNumArr = (str) => str.split(" ").map(Number);

const getFactorial = n => {
    return (n===0? 1 : n * getFactorial(n - 1));
};
  
const getPermutation = (n, r) => {
    let result = 1;

    while (r--) {
      result *= n--;
    }
    return result;
};
  
const getCombination = (n, r) => {
    return Math.round(getPermutation(n, r) / getFactorial(r));
};

  
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function(line) {
    input.push(line.trim());
  })
  .on("close", function() {
    let inputIndex = 0;
    let t = Number(input[inputIndex++]);

    while (t--) {
      const [r, n] = strToNumArr(input[inputIndex++]);
      console.log(getCombination(n, r));
    }
  });
