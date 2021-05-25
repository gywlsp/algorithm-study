const input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const N = input.shift();
    let result = 0;
    const A = [],
      B = [],
      C = [],
      D = [];
    for (let i = 0; i < N; i++) {
      input[i].split(" ").forEach((numStr, j) => {
        if (j === 0) {
          A.push(+numStr);
        } else if (j === 1) {
          B.push(+numStr);
        } else if (j === 2) {
          C.push(+numStr);
        } else if (j === 3) {
          D.push(+numStr);
        }
      });
    }

    const abSumMap = new Map();
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        const a = A[i];
        const b = B[j];
        const sum = a + b;
        abSumMap.set(sum, (abSumMap.get(sum) || 0) + 1);
      }
    }

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        const c = C[i];
        const d = D[j];
        const n = abSumMap.get(-(c + d));
        if (n) {
          result += n;
        }
      }
    }

    console.log(result);
  });
