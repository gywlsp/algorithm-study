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
    memo = [0];

    for(let i=1; i<=n; i++){
      lis(i);
    }

    console.log(memo.length-1);
  });

const lis = (end) => {
    const num = numList[end];
    const maxLen = getMaxLen(num, 0, memo.length-1);

    const len = maxLen+1;
    if(memo[len]===undefined){
        memo.push(num);
    }
    if(memo[len]>num){
        memo[len]=num;
    }
};

const getMaxLen = (num, start, end) => {
    if(start>end){
        return 0;
    }
    if(start===end){
        return memo[start]>=num? 0: start;
    }

    const mid = Math.floor((start+end)/2);
    let ret;
    if(memo[mid]>=num){
        ret = getMaxLen(num, start, mid-1);
    }else{
        ret = Math.max(mid, getMaxLen(num, mid+1, end));
    }

    return ret;
};