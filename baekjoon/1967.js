//https://www.acmicpc.net/problem/1967

const input = [];
let tree;
let visited;

let result = 0;
let endNode = 0;

const strToNumArr = (str) => str.split(" ").map((numString) => Number(numString));

const dfs = (node, len) => {
    if(visited[node]){
        return;
    }

    visited[node] = true;
    if(len>result){
        result = len;
        endNode = node;
    }

    for(let i=0; i<tree[node].length; i++){
        dfs(tree[node][i][0], tree[node][i][1]+len);
    }

};


require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const N = Number(input.shift());
    tree = [...Array(N+1)].map(()=>[]);
    visited = [...Array(N+1)].fill(false);
    let parent, child, len;
    input.forEach((str)=>{
        [parent, child, len] = strToNumArr(str);
        tree[parent].push([child, len]);
        tree[child].push([parent, len]);
    })

    dfs(1,0);
    
    result=0;
    visited.fill(false);
    dfs(endNode, 0);

    console.log(result);
  });
