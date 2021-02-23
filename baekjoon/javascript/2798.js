//https://www.acmicpc.net/problem/2798

const input = [];

const strToNumArr = (str) => str.split(" ").map(Number);

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const [N, M] = strToNumArr(input[0]);
    const numList = strToNumArr(input[1]);
    let temp=0;
    let result=0;
    
    for(let i=0; i<N; i++){
        for(let j=i+1; j<N; j++){
            for(let k=j+1; k<N; k++){
                temp = numList[i]+numList[j]+numList[k];
                if(temp>result && temp<=M){
                    result = temp;
                }
            }
        }
    }

    console.log(result);
  });
