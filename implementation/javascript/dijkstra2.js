const N = 4;

const input = [
  [1, 2, 1],
  [1, 4, 1],
  [2, 3, 1],
  [2, 4, 1],
  [4, 3, 1],
];
const start = 1;
const graph = [...Array(N + 1)].map(() => []);
const visited = Array(N + 1).fill(false);
const minDistance = Array(N + 1).fill(Number.MAX_SAFE_INTEGER);
input.forEach(([u, v, w]) => {
  graph[u].push([v, w]);
});
minDistance[start] = 0;
while (true) {
  let minIndex = -1,
    minValue = Number.MAX_SAFE_INTEGER;
  minDistance.forEach((d, i) => {
    if (!visited[i] && d < minValue) {
      minIndex = i;
      minValue = d;
    }
  });
  if (minIndex === -1) break;
  visited[minIndex] = true;
  graph[minIndex].forEach(([v, w]) => {
    const newDist = minDistance[minIndex] + w;
    if (minDistance[v] > newDist) {
      minDistance[v] = newDist;
    }
  });
}

console.log(minDistance.slice(1));
