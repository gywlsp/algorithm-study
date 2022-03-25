const input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const N = +input.shift();
    const matrix = input.map((str) => str.split(" ").map(Number));

    const get222PoolingResult = (matrix) => {
      const len = matrix.length;
      if (len === 2) {
        return [...matrix[0], ...matrix[1]].sort((a, b) => b - a)[1];
      }
      const newMatrix = [...Array(len / 2)].map(() =>
        Array(len / 2).fill(null)
      );
      for (let i = 0; i < len / 2; i++) {
        for (let j = 0; j < len / 2; j++) {
          const r = i * 2,
            c = j * 2;
          const numbers = [
            matrix[r][c],
            matrix[r + 1][c],
            matrix[r][c + 1],
            matrix[r + 1][c + 1],
          ].sort((a, b) => b - a);
          newMatrix[i][j] = numbers[1];
        }
      }
      return get222PoolingResult(newMatrix);
    };

    const result = get222PoolingResult(matrix);
    console.log(result);
  });
