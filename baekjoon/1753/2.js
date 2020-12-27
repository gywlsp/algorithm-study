//https://www.acmicpc.net/problem/1753

const input = [];
let graph, visited, distances;
const INF = 987654321;

const strToNumArr = (str) => str.split(" ").map((numString) => Number(numString));

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
      const [V, E] = strToNumArr(input.shift());
      const START_V = Number(input.shift());

      graph=[...Array(V)].map(()=>[]);
      visited=Array(V).fill(false);
      distances=Array(V).fill(INF);
      
      let u, v, w;
      input.forEach((str)=>{
        [u, v, w] = strToNumArr(str);
        graph[u-1].push([w, v-1]);
      });

      dijkstra(START_V-1);
      
      distances.forEach((d, i)=>{
          if(d===INF){
              distances[i]="INF";
          }
      })
      console.log(distances.join("\n"));
  });


const dijkstra = (vStart) => {
    distances[vStart]=0;

    while(true){
        let closestW=INF, closestV;
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
        let w, v;
        graph[closestV].forEach((node)=>{
            [w, v] = node;
            if(visited[v]){
                return;
            }
            distances[v]=Math.min(distances[v], distances[closestV]+w);
        })
    }
};
