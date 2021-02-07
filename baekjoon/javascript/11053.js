const input = [];
let n, numList, memo;

const strToNumArr = (str) => str.split(" ").map((numString) => Number(numString));

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    n = Number(input[0]);
    numList = [0, ...strToNumArr(input[1])];
    memo = [0, ...Array(n)];

    for(let i=1; i<=n; i++){
      lis(i);
    }

    console.log(Math.max(...memo));
  });

const lis = (end) => {
    let ret = memo[end];
    if(ret!==undefined){
      return ret;
    }

    ret=1;
    for(let i=0; i<end; i++){
      if(numList[i]<numList[end]){
        ret=Math.max(ret, lis(i)+1);
      }
    }
    memo[end]=ret;
    return ret;
};