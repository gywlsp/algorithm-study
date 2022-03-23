function solution(n, edge) {
  const graph = [...Array(n + 1)].map(() => []);
  edge.forEach(([start, end]) => {
    graph[start].push(end);
    graph[end].push(start);
  });
  const visited = Array(n + 1).fill(false);
  const queue = [[1, 0]];
  visited[1] = true;
  const distInfo = Array(n).fill(0);
  while (queue.length) {
    const [curr, dist] = queue.shift();
    distInfo[dist] += 1;
    graph[curr].forEach((next) => {
      if (!visited[next]) {
        visited[next] = true;
        queue.push([next, dist + 1]);
      }
    });
  }
  let result = 0;
  for (let i = distInfo.length - 1; i >= 0; i--) {
    if (distInfo[i]) {
      result = distInfo[i];
      break;
    }
  }
  return result;
}
