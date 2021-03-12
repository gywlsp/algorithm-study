const graph = [
    [],
    [2, 3, 8],
    [1, 7],
    [1, 4, 5],
    [3, 5],
    [3, 4],
    [7],
    [2, 6, 8],
    [1, 7]
];
const visited1 = Array(graph.length).fill(false);
const visited2 = Array(graph.length).fill(false);
const result1 = [];
const result2 = [];

//재귀
const dfs1 = (graph, v, visited) => {
    visited[v] = true;
    result1.push(v);
    graph[v].forEach((u)=>{
        if(!visited[u]){
            dfs1(graph, u, visited);
        }
    })
}

//스택
const dfs2 = (graph, start, visited) => {
    const callStack = [start];
    while(callStack.length){
        const v = callStack.pop();
        if(visited[v]){
            continue;
        }
        visited[v] = true;
        result2.push(v);
        for(let i=graph[v].length-1; i>=0; i--){
            const u = graph[v][i];
            if(!visited[u]){
                callStack.push(u);
            }
        }
    }
}

dfs1(graph, 1, visited1);
dfs2(graph, 1, visited2);
console.log(result1.join(" "));
console.log(result2.join(" "));

