//https://www.acmicpc.net/problem/10830

let input = [];
const strToNumArr = (str) => str.split(" ").map((numString) => Number(numString));

let n;

const multiplyMatrix = (_matrixA, _matrixB) => {
  const result = [...Array(n)].map(() => [...Array(n)].map(() => 0));
  
  for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
      for(let k=0; k<n; k++){
        result[i][j] += _matrixA[i][k] * _matrixB[k][j];
      }
      result[i][j] = result[i][j] % 1000;
    }
  }
  return result;
};

const solve = (_matrix, _power) => {
  if(_power === 1) return _matrix;

  const dividedMatrix = solve(_matrix, Math.floor(_power/2));
  const multipliedMatrix = multiplyMatrix(dividedMatrix, dividedMatrix);
  return _power%2 === 1 ? multiplyMatrix(multipliedMatrix, _matrix) : multipliedMatrix;
};

const getInputMatrix = () => {
  input.splice(0,1);
  return input.map((row) => row.split(" ").map((numString) => Number(numString)%1000));
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const [N, B] = strToNumArr(input[0]);
    n = N;
    const inputMatrix = getInputMatrix();

    const result = solve(inputMatrix, B);
    result.forEach((arr) => console.log(arr.join(" ")));
  });
