//https://www.acmicpc.net/problem/2606

const input = [];
let graph, visited, result=0;

const strToNumArr = (str) => str.split(" ").map((numString) => Number(numString));

const dfs = (v) => {
    if(visited[v]){
        return;
    }

    visited[v]=true;
    result++;
    graph[v].forEach((vertex)=>{
        if(!visited[vertex]){
            dfs(vertex);
        }
    });
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
      const N = Number(input.shift());
      graph = [...Array(N+1)].map(()=>[]);
      visited = [...Array(N+1)].fill(false);
      input.splice(0, 1);
      let v1, v2;
      input.forEach((str)=>{
        [v1, v2] = strToNumArr(str);
        graph[v1].push(v2);
        graph[v2].push(v1);
      });

      dfs(1);
      console.log(result-1);
  });