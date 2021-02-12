//https://www.acmicpc.net/problem/12846

const input = [];
const stack = [];

const strToNumArr = (str) => str.split(" ").map((numString) => Number(numString));

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const PAY_LIST = strToNumArr(input[1]+" 0");

    let result = 0;
    for(let i=0; i<PAY_LIST.length; i++){
        while(stack.length!==0 && PAY_LIST[i]<PAY_LIST[stack[stack.length-1]]){
            const j = stack.pop();
            const width = stack.length===0? i : i-stack[stack.length-1]-1;
            result = Math.max(result, PAY_LIST[j]*width);
        }
        stack.push(i);
    }
    console.log(result);
  });