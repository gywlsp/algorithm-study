//https://www.acmicpc.net/problem/11725

const input = [];

const strToNumArr = (str) => str.split(" ").map((numString) => Number(numString));

let linkedNodes;
let visited;
let result;

const findChildren = (parent) => {
  visited[parent]=true;
  for(let i=0; i<linkedNodes[parent].length; i++){
    const next = linkedNodes[parent][i];
    if(visited[next]){
      continue;
    }
    result[next] = parent;
    findChildren(next);
  }
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const N = Number(input.shift());
    linkedNodes = [...Array(N+1)].map(()=>([]));
    visited = [...Array(N+1)];
    result = [...Array(N+1)];
    
    input.forEach((str)=>{
      const [a, b] = strToNumArr(str);
      linkedNodes[a].push(b);
      linkedNodes[b].push(a);
    });

    findChildren(1);
    result.splice(0,2);
    console.log(result.join("\n"));
  });
