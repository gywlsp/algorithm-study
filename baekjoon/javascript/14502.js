//https://www.acmicpc.net/problem/14502

const input = [],
  originalMap = [],
  map = [],
  virusMap = [];
let R,
  C,
  result = 0;

const dr = [-1, 0, 1, 0];
const dc = [0, 1, 0, -1];

const strToNumArr = (str) => str.split(" ").map(Number);

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    [R, C] = strToNumArr(input.shift());
    input.forEach((str) => {
      originalMap.push(strToNumArr(str));
      map.push(Array(C).fill(0));
      virusMap.push(Array(C).fill(0));
    });
    pick(3);
    console.log(result);
  });

const initMap = () => {
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      map[r][c] = originalMap[r][c];
    }
  }
};

const initVirusMap = () => {
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      virusMap[r][c] = map[r][c];
    }
  }
};

const pick = (toPick) => {
  if (toPick === 0) {
    bfs();
    return;
  }
  if (toPick === 3) {
    initMap();
  }
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (map[r][c]) {
        continue;
      }
      map[r][c] = 1;
      pick(toPick - 1);
      map[r][c] = 0;
    }
  }
};

const bfs = () => {
  initVirusMap();
  const queue = [];
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (originalMap[r][c] === 2) {
        queue.push([r, c]);
      }
    }
  }

  while (queue.length) {
    const [r, c] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const nextR = r + dr[i];
      const nextC = c + dc[i];
      if (
        nextR < 0 ||
        nextR >= R ||
        nextC < 0 ||
        nextC >= C ||
        virusMap[nextR][nextC]
      ) {
        continue;
      }
      virusMap[nextR][nextC] = 2;
      queue.push([nextR, nextC]);
    }
  }

  updateMaxSafetyArea();
};

const updateMaxSafetyArea = () => {
  let count = 0;
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (!virusMap[r][c]) {
        count++;
      }
    }
  }
  result = Math.max(result, count);
};
