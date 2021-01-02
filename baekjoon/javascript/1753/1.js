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
    const priorityQueue = new PriorityQueue([[0, vStart]]);
    distances[vStart]=0;

    let dist, vertex, d, w, v;
    while(priorityQueue.data.length!==0){
        [d, vertex]=priorityQueue.deQueue();
        dist=-d;
        if(dist>distances[vertex]){
            continue;
        }
        
        graph[vertex].forEach((value)=>{
            [w, v] = value;
            if(dist+w>=distances[v]){
                return;
            }

            distances[v]=dist+w;
            priorityQueue.enQueue([-(dist+w), v]);
        });
    }
};

class PriorityQueue {
    data;

    constructor(initialValue){
        this.data=initialValue;
    }

    swapData = (a, b) => {
      const temp = this.data[a];
      this.data[a] = this.data[b];
      this.data[b] = temp;
    };

    enQueue = (node) => {
      this.data.push(node);
      let index = this.data.length-1;
      while(index>0 && this.data[index][0]>this.data[Math.floor((index-1)/2)][0]){
        this.swapData(index, Math.floor((index-1)/2));
        index = (index-1)/2;
      }
    };

    deQueue = () => {
      if(this.data.length===1){
        return this.data.pop();
      }

      const primaryNode = this.data[0];
      this.data[0]=this.data.pop();

      let curr=0, left, right, next;
      while(true){
        left=curr*2+1;
        right=curr*2+2;
        if(left>=this.data.length){
          break;
        }

        next=curr;
        if(this.data[next][0]<this.data[left][0]){
          next=left;
        }
        if(right<this.data.length && this.data[next][0]<this.data[right][0]){
          next=right;
        }
        
        if(next===curr){
          break;
        }
        this.swapData(curr, next);
        curr=next;
      }

      return primaryNode;
    };
  }
  
