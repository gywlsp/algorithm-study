//https://www.acmicpc.net/problem/1012

const input = [];
let inputIndex = 0;

const distances = [[-1, 0], [1, 0], [0, -1], [0, 1]];
let graph, columnCount, rowCount, cabbageCount, result=0;

const strToNumArr = (str) => str.split(" ").map((numString) => Number(numString));

const bfs = (rStart, cStart) => {
    const queue = [[rStart, cStart]];
    let currentR, currentC, r, c;

    while(queue.length!==0){
        [currentR, currentC]=queue.shift();
        if(!graph[currentR][currentC]){
            continue;
        }

        graph[currentR][currentC]=0;
        distances.forEach(([dr, dc])=>{
            r=currentR+dr;
            c=currentC+dc;
            if(r<0 || r>=rowCount || c<0 || c>=columnCount){
                return;
            }
            if(graph[r][c]){
                queue.push([r, c]);
            }
        });
    }
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
      let t = Number(input[inputIndex++]);
      while(t--){
          [columnCount, rowCount, cabbageCount] = strToNumArr(input[inputIndex++]);
          graph = [...Array(rowCount)].map(()=>Array(columnCount).fill(0));
          result = 0;

          while(cabbageCount--){
            const [c, r] = strToNumArr(input[inputIndex++]);
            graph[r][c] = 1;
          }

          while(true){
              let r, c;
              for(let i=0; i<rowCount; i++){
                  const j = graph[i].indexOf(1);
                  if(j===-1){
                      continue;
                  }
                  r=i, c=j;
                  break;
              }

              if(r===undefined && c===undefined) break;

              result++;
              bfs(r, c);
          }
          
          console.log(result);
      }
  });