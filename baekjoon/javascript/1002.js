const input = [];
const strToNumArr = (str) => str.split(" ").map(Number);

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    let t = Number(input.shift());
    const result = [];
    while (t--) {
      const [x1, y1, r1, x2, y2, r2] = strToNumArr(input.shift());
      const rSum = r1 + r2;
      const rSub = Math.abs(r1 - r2);
      const xyDist = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
      if (xyDist < rSum && xyDist > rSub) {
        result.push(2);
        continue;
      }
      if (xyDist > rSum || xyDist < rSub) {
        result.push(0);
        continue;
      }
      result.push(!xyDist && !rSub ? -1 : 1);
    }
    console.log(result.join("\n"));
  });
