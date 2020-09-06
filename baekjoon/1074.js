//https://www.acmicpc.net/problem/1074

let input = [];
let result = 0;

const strToNumArr = (str) => str.split(" ").map((numChar) => Number(numChar));

const search = (r, c, rs, re, cs, ce) => {
  const length = re - rs + 1;
  if (length === 1) return;

  const rhalf = (rs + re) / 2;
  const chalf = (cs + ce) / 2;

  if (r < rhalf && c < chalf) {
    search(r, c, rs, Math.floor(rhalf), cs, Math.floor(chalf));
  }
  if (r < rhalf && c > chalf) {
    result += Math.pow(length / 2, 2);
    search(r, c, rs, Math.floor(rhalf), Math.ceil(chalf), ce);
  }
  if (r > rhalf && c < chalf) {
    result += Math.pow(length / 2, 2) * 2;
    search(r, c, Math.ceil(rhalf), re, cs, Math.floor(chalf));
  }
  if (r > rhalf && c > chalf) {
    result += Math.pow(length / 2, 2) * 3;
    search(r, c, Math.ceil(rhalf), re, Math.ceil(chalf), ce);
  }
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const [n, r, c] = strToNumArr(input[0]);
    let rs = 0,
      cs = 0,
      re = (1 << n) - 1,
      ce = (1 << n) - 1;
    search(r, c, rs, re, cs, ce);
    console.log(result);
  });
