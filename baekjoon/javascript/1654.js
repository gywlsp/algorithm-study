const input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const [K, N] = input.shift().split(" ").map(Number);
    const lenList = input.map(Number);
    let min = 1,
      max = Math.max(...lenList),
      result = 0;
    while (min <= max) {
      const mid = Math.floor((min + max) / 2);
      const n = lenList.reduce((acc, curr) => {
        const cnt = Math.floor(curr / mid);
        return acc + cnt;
      }, 0);
      if (n >= N) {
        result = Math.max(result, mid);
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }
    console.log(result);
  });
