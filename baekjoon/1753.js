//https://www.acmicpc.net/problem/1753

const input = [];
let graph, distances;

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
      distances=Array(V).fill(987654321);
      
      let u, v, w, vertexIndex;
      input.forEach((str)=>{
        [u, v, w] = strToNumArr(str);
        vertexIndex = graph[u-1].findIndex((value)=>value[1]===v-1);
        if(vertexIndex===-1){
            graph[u-1].push([w, v-1]);
            return;
        }
        if(w<graph[u-1][vertexIndex][0]){
            graph[u-1][vertexIndex][0]=w;
        }
      });

      dijkstra(START_V-1);
      
      distances.forEach((d)=>{
          console.log(d===987654321? "INF": d);
      })
  });


const dijkstra = (vStart) => {
    const priorityQueue = [[0, vStart]];
    distances[vStart]=0;

    let dist, vertex, w, v;
    while(priorityQueue.length!==0){
        [dist, vertex]=priorityQueue.shift();
        if(dist>distances[vertex]){
            continue;
        }
        
        graph[vertex].forEach((value)=>{
            [w, v] = value;
            if(dist+w<distances[v]){
                distances[v]=dist+w;
                priorityQueue.push([dist+w, v]);
            }
        });
        priorityQueue.sort((a, b)=>(a[0]-b[0]));
    }
};