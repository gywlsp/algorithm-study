const input = [];

const strToNumArr = (str) => str.split(" ").map(Number);
const drList = [1, -1, 0, 0];
const dcList = [0, 0, 1, -1];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const [C, R] = strToNumArr(input.shift());
    let tomatoCount = C * R,
      ripeCount = 0;

    let prevRipeList = [];
    const box = input.map((str, r) =>
      str.split(" ").map((state, c) => {
        const ret = Number(state);
        if (ret === -1) {
          tomatoCount--;
        }
        if (ret === 1) {
          prevRipeList.push(`${r} ${c}`);
          ripeCount++;
        }
        return ret;
      })
    );

    let t = 0;
    const newRipeSet = new Set();
    while (true) {
      prevRipeList.forEach((pos) => {
        const [r, c] = strToNumArr(pos);
        drList.forEach((dr, i) => {
          const dc = dcList[i],
            nextR = r + dr,
            nextC = c + dc;
          if (
            nextR < 0 ||
            nextR >= R ||
            nextC < 0 ||
            nextC >= C ||
            box[nextR][nextC] !== 0
          ) {
            return;
          }
          box[nextR][nextC] = 1;
          newRipeSet.add(`${nextR} ${nextC}`);
        });
      });

      if (newRipeSet.size === 0) {
        break;
      }

      t++;
      ripeCount += newRipeSet.size;
      prevRipeList = Array.from(newRipeSet);
      newRipeSet.clear();
    }

    console.log(ripeCount === tomatoCount ? t : -1);
  });
