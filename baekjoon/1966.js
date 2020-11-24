//https://www.acmicpc.net/problem/1966

const input = [];
let inputIndex = 0;

const strToNumArr = (str) => str.split(" ").map((numString) => Number(numString));
const getNumIndexArrayList = (str) => str.split(" ").map((numString, index) => ([Number(numString), index]));

const getMaxNum = (numIndexArrayList) => Math.max(...numIndexArrayList.map((numIndexArray)=>numIndexArray[0]));

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    let t = Number(input[inputIndex++]);
    while(t--){
        const [N, M] = strToNumArr(input[inputIndex++]);
        const numIndexArrayList = getNumIndexArrayList(input[inputIndex++]);
    
        let currentNum, currentNumIndex, maxNum;
        let result = 0;
        while(true){
            const currentNumIndexArray = numIndexArrayList.shift();
            [currentNum, currentNumIndex] = currentNumIndexArray;
            maxNum = getMaxNum(numIndexArrayList);

            if(currentNum < maxNum){
                numIndexArrayList.push(currentNumIndexArray);
            }
            if(currentNum >= maxNum){
                result++;
                if(currentNumIndex === M){
                    break;
                }
            }
        }

        console.log(result);
    }
  });
