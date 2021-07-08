const input = [];
const strToNumArr = (str) => str.split(" ").map(Number);

let whiteCnt = 0,
  blueCnt = 0;

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const N = +input.shift();
    const paper = input.map(strToNumArr);
    cutPaper(paper, 0, N - 1, 0, N - 1);
    console.log(whiteCnt);
    console.log(blueCnt);
  });

const cutPaper = (paper, rs, re, cs, ce) => {
  let hasWhite = false,
    hasBlue = false;
  for (let r = rs; r <= re; r++) {
    for (let c = cs; c <= ce; c++) {
      if (hasWhite && hasBlue) {
        break;
      }
      if (paper[r][c]) {
        hasBlue = true;
        continue;
      }
      hasWhite = true;
    }
  }

  if (hasWhite && hasBlue) {
    const rMid = Math.floor((rs + re) / 2),
      cMid = Math.floor((cs + ce) / 2);
    cutPaper(paper, rs, rMid, cs, cMid);
    cutPaper(paper, rMid + 1, re, cs, cMid);
    cutPaper(paper, rs, rMid, cMid + 1, ce);
    cutPaper(paper, rMid + 1, re, cMid + 1, ce);
    return;
  }

  hasWhite ? whiteCnt++ : blueCnt++;
};
