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
      
      let u, v, w, prevEdge;
      input.forEach((str)=>{
        [u, v, w] = strToNumArr(str);
        prevEdge = graph[u-1].find((value)=>value[1]===v-1);
        if(!prevEdge){
            graph[u-1].push([w, v-1]);
            return;
        }
        if(w<prevEdge[0]){
            prevEdge[0]=w;
        }
      });

      dijkstra(START_V-1);
      
      distances.forEach((d)=>{
          console.log(d===987654321? "INF": d);
      })
  });


const dijkstra = (vStart) => {
    const priorityQueue = new PriorityQueue([0, vStart]);
    priorityQueue.enQueue([0, vStart]);
    //const priorityQueue = [[0, vStart]];
    distances[vStart]=0;

    let dist, vertex, w, v;
    while(priorityQueue.data.length!==0){
        [dist, vertex]=priorityQueue.deQueue();
        if(dist>distances[vertex]){
            continue;
        }
        
        graph[vertex].forEach((value)=>{
            [w, v] = value;
            if(dist+w>=distances[v]){
                return;
            }

            distances[v]=dist+w;
            priorityQueue.enQueue([dist+w, v]);
        });
    }
};

class PriorityQueue {
    data = [];

    constructor(initialData){
        this.data.push(initialData);
    }

    swap = (a, b) => {
      const temp = this.data[a];
      this.data[a] = this.data[b];
      this.data[b] = temp;
    };
  
    compareBottomUp = (node, index) => {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.data[parentIndex][0] < node[0]) {
        this.swap(index, parentIndex);
        this.compareBottomUp(node, parentIndex);
      }
    };
  
    enQueue = (node) => {
      const newNode = node.map((value, i)=>(i===0? -value: value));
      this.data.push(newNode);
      this.compareBottomUp(node, this.data.length - 1);
    };


    compareTopDown = (data, index) => {
      const childIndexBase = index * 2;
      let target = childIndexBase + 1;
      if (this.data[childIndexBase + 1][0] < this.data[childIndexBase + 2][0]) {
        target += 1;
      }
      if (this.data[target][0] > data[0]) {
        this.swap(target, index);
        this.compareTopDown(data, target);
      }
    };

    deQueue = () => {
      const result = this.data[0];
      const lastNode = this.data.pop();
      this.data[0]=lastNode;
      this.compareTopDown(lastNode, 0);
      return result;
    };
  }
  
