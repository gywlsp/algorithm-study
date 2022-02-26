function solution(n, computers) {
  const visited = Array(n).fill(false);
  let result = 0;
  while (visited.includes(false)) {
    const startNode = visited.indexOf(false);
    dfs(startNode, computers, visited);
    result++;
  }

  function dfs(curr, computers, visited) {
    visited[curr] = true;
    computers[curr].forEach((connected, next) => {
      if (connected && !visited[next]) {
        dfs(next, computers, visited);
      }
    });
  }

  return result;
}
