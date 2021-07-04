//https://www.acmicpc.net/problem/17144

const input = [];
const strToNumArr = (str) => str.split(" ").map(Number);
const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const [R, C, T] = strToNumArr(input.shift());
    const roomMap = input.map(strToNumArr);
    const temp = input.map(strToNumArr);
    let airCleanerTop;
    for (let r = 0; r < R; r++) {
      if (roomMap[r][0] === -1) {
        airCleanerTop = r;
        break;
      }
    }

    let t = T;
    while (t--) {
      for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
          if (roomMap[r][c] <= 0) {
            continue;
          }
          const diffuseAmount = Math.floor(roomMap[r][c] / 5);
          for (let i = 0; i < 4; i++) {
            const nextR = r + dr[i];
            const nextC = c + dc[i];
            if (
              nextR < 0 ||
              nextR >= R ||
              nextC < 0 ||
              nextC >= C ||
              roomMap[nextR][nextC] === -1
            ) {
              continue;
            }
            temp[nextR][nextC] += diffuseAmount;
            temp[r][c] -= diffuseAmount;
          }
        }
      }
      copyMap(temp, roomMap);

      circulate("counterclockwise", airCleanerTop, 0, roomMap);
      circulate("clockwise", airCleanerTop + 1, 0, roomMap);

      copyMap(roomMap, temp);
    }

    const sum = roomMap.reduce((acc, curr) => {
      return (
        acc +
        curr.reduce((acc, curr) => {
          if (curr > 0) {
            return acc + curr;
          }
          return acc;
        }, 0)
      );
    }, 0);
    console.log(sum);
  });

const copyMap = (from, to) => {
  from.forEach((row, r) => {
    row.forEach((_, c) => {
      to[r][c] = from[r][c];
    });
  });
};

const circulate = (dir, cleanerR, cleanerC, roomMap) => {
  const R = roomMap.length;
  const C = roomMap[0].length;
  const dirIndexList = dir === "clockwise" ? [1, 3, 0, 2] : [0, 3, 1, 2];
  let r = cleanerR + dr[dirIndexList[0]];
  let c = cleanerC;

  dirIndexList.forEach((i) => {
    while (true) {
      const nextR = r + dr[i];
      const nextC = c + dc[i];
      if (
        (dir === "clockwise" && (nextR >= R || nextR < cleanerR)) ||
        (dir === "counterclockwise" && (nextR < 0 || nextR > cleanerR)) ||
        nextC >= C ||
        nextC < 0
      ) {
        break;
      }
      roomMap[r][c] = roomMap[nextR][nextC];
      r = nextR;
      c = nextC;
    }
  });
  roomMap[cleanerR][cleanerC + 1] = 0;
};
