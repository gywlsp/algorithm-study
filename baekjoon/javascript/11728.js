const input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const [A_CNT, B_CNT] = input[0].split(" ").map(Number);
    const A = input[1].split(" ").map(Number);
    const B = input[2].split(" ").map(Number);
    let a = 0,
      b = 0;
    const result = [];
    while (a < A_CNT || b < B_CNT) {
      if (a === A_CNT) {
        result.push(B[b++]);
        continue;
      }
      if (b === B_CNT) {
        result.push(A[a++]);
        continue;
      }
      result.push(A[a] > B[b] ? B[b++] : A[a++]);
    }
    console.log(result.join(" "));
  });
