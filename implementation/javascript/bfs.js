const graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
];
const visited = Array(graph.length).fill(false);
const result = [];

//큐
const bfs = (graph, start, visited) => {
  const queue = [start];
  while (queue.length) {
    const v = queue.shift();
    visited[v] = true;
    result.push(v);
    graph[v].forEach((u) => {
      if (!visited[u]) {
        visited[u] = true;
        queue.push(u);
      }
    });
  }
};

bfs(graph, 1, visited);
console.log(result.join(" "));
