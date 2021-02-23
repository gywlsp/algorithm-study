const input = [];
const INF = 987654321;

const strToNumArr = (str) => str.split(" ").map(Number);

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
      const [V, E] = strToNumArr(input.shift());
      const adj = [...Array(V)].map(()=>[]);
      const added = Array(V).fill(false);
      const minWeight = Array(V).fill(INF);

      let u, v, w, result=0;
      input.forEach((str)=>{
          [u, v, w] = strToNumArr(str);
          adj[u-1].push([v-1, w]);
          adj[v-1].push([u-1, w]);
      });

      minWeight[0]=0;
      for(let i=0; i<V; i++){
          let u;
          minWeight.forEach((mw, v)=>{
            if(added[v]){
                return;
            }
            if(u===undefined || mw<minWeight[u]){
                u=v;
            }
          });

          result+=minWeight[u];
          added[u]=true;
          
          let vertex, weight;
          adj[u].forEach((edge)=>{
            [vertex, weight] = edge;
            if(added[vertex]){
                return;
            }
            if(weight<minWeight[vertex]){
                minWeight[vertex]=weight;
            }
          });
      }

      console.log(result);
  });
