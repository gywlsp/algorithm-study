//https://www.acmicpc.net/problem/2960

const input = [];

const strToNumArr = (str) => str.split(" ").map((numString) => Number(numString));

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const [N, K] = strToNumArr(input[0]);
    let k = K;
    const NumList = [...Array(N)].map((_, i) => i+1).slice(1);
    let p = 0;
    let result = undefined;
    while(k>0){
        p = NumList[0];
        const T = Math.floor(NumList[NumList.length-1]/p);
        for(let i = 0; i < T ; i++){
            const index = NumList.indexOf(p*(i+1));
            if(index!==-1){
                NumList.splice(index, 1);
                k--;
                if(k===0) {
                    result = p*(i+1);
                    break;
                }
            }
        }
    }
    console.log(result);
  });
