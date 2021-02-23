const input = [];
const strToNumArr = (str) =>
  str.split(" ").map(Number);

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const [N, K] = strToNumArr(input.shift());
    const values = input.map(Number);

    let k = K,
      v,
      q,
      result = 0;
    for (let i = N - 1; i >= 0; i--) {
      v = values[i];
      q = Math.floor(k / v);
      if (q === 0) {
        continue;
      }
      result += q;
      k %= v;
      if (k === 0) {
        break;
      }
    }

    console.log(result);
  });
