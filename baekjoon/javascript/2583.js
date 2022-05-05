const input = [];
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const [height, width, rectCnt] = input.shift().split(" ").map(Number);
    const paper = [...Array(width)].map(() => Array(height).fill(0));
    input.forEach((rectStr) => {
      const [lbx, lby, rtx, rty] = rectStr.split(" ").map(Number);
      for (let x = lbx; x < rtx; x++) {
        for (let y = lby; y < rty; y++) {
          paper[x][y] = 1;
        }
      }
    });

    const areas = [];
    while (true) {
      let startX = -1,
        startY = -1;
      for (x = 0; x < width; x++) {
        for (y = 0; y < height; y++) {
          if (paper[x][y]) continue;
          (startX = x), (startY = y);
          break;
        }
      }
      if (startX === -1 && startY === -1) break;
      const area = getArea(startX, startY, paper);
      areas.push(area);
    }

    console.log(areas.length);
    console.log(areas.sort((a, b) => a - b).join(" "));
  });

const getArea = (x, y, paper) => {
  let area = 0;

  const dfs = (x, y, paper) => {
    paper[x][y] = 1;
    area += 1;
    for (let i = 0; i < 4; i++) {
      const nextX = x + dx[i];
      const nextY = y + dy[i];
      if (
        nextX < 0 ||
        nextX >= paper.length ||
        nextY < 0 ||
        nextY >= paper[0].length ||
        paper[nextX][nextY]
      )
        continue;
      dfs(nextX, nextY, paper);
    }
  };

  dfs(x, y, paper);
  return area;
};
