//https://www.acmicpc.net/problem/1966

const input = [];
let inputIndex = 0;

const strToNumArr = (str) => str.split(" ").map((numString) => Number(numString));

const getNumIndexArrayQueue = (str) => str.split(" ").map((numString, index) => ([Number(numString), index]));

const getMaxNum = (numIndexArrayQueue) => Math.max(...numIndexArrayQueue.map((numIndexArray)=>numIndexArray[0]));


require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    let t = Number(input[inputIndex++]);
    while(t--){
        const [N, M] = strToNumArr(input[inputIndex++]);
        const queue = getNumIndexArrayQueue(input[inputIndex++]);
    
        let currentNum, currentInitialIndex, maxNum;
        let result = 0;
        while(true){
            const current = queue.shift();
            [currentNum, currentInitialIndex] = current;
            maxNum = getMaxNum(queue);

            if(currentNum < maxNum){
                queue.push(current);
            }
            if(currentNum >= maxNum){
                result++;
                if(currentInitialIndex === M){
                    break;
                }
            }
        }

        console.log(result);
    }
  });
