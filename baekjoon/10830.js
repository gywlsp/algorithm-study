//https://www.acmicpc.net/problem/10830

let input = [];
const strToNumArr = (str) => str.split(" ").map((numString) => Number(numString));

let result;
const inputMatrix = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const [N, B] = strToNumArr(input[0]);
    // for(let i=1; i<=N; i++){
    //     inputMatrix.push(strToNumArr(input[i]));
    // }

    let temp = B;
    let count = 0;

    while(true){
        temp = Math.floor(temp/2);
        if(temp>0) count++;
        else break;
    }
    console.log(count);
  });
