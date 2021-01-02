//https://www.acmicpc.net/problem/1753

const input = [];
let inputIndex=0;

let graph, visited, distances;
const INF = 987654321;

const strToNumArr = (str) => str.split(" ").map((numString) => Number(numString));

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
      const N = Number(input[inputIndex++]);
      const M = Number(input[inputIndex++]);
      
      graph=[...Array(N)].map(()=>[]);
      visited=Array(N).fill(false);
      distances=Array(N).fill(INF);
      
      let u, v, w, t=M;
      while(t--){
        [u, v, w] = strToNumArr(input[inputIndex++]);
        graph[u-1].push([v-1, w]);
      };

      const [start, end] = strToNumArr(input[inputIndex++]);

      dijkstra(start-1);
      
      console.log(distances[end-1]);
  });


const dijkstra = (vStart) => {
    distances[vStart]=0;

    while(true){
        let closestV, closestW=INF;
        for(let i=0; i<distances.length; ++i){
            if(distances[i]<closestW && !visited[i]){
                closestW=distances[i];
                closestV=i;
            }
        }

        if(closestW===INF){
            break;
        }

        visited[closestV]=true;
        let v, w;
        graph[closestV].forEach((node)=>{
            [v, w] = node;
            if(visited[v]){
                return;
            }
            distances[v]=Math.min(distances[v], distances[closestV]+w);
        })
    }
};
