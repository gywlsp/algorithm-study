//https://www.acmicpc.net/problem/1182

const input = [];
let numList, n, s;
let result=0;

const strToNumArr = (str) =>
  str.split(" ").map(Number);

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    [n, s] = strToNumArr(input[0]);
    numList = strToNumArr(input[1]);
    for(let count=1; count<=n; count++){
        solve(0, count, s);
    }
    console.log(result);
  });

const solve = (start, count, sum) => {
    if(start>=n){
        return;
    }
    if(count===1){
        for(let i=start; i<n; i++){
            if(numList[i]===sum){
                result++;
            }
        }
        return;
    }
    solve(start+1, count-1, sum-numList[start]);
    solve(start+1, count, sum);
};