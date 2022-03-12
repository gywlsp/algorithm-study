//https://www.acmicpc.net/problem/15686

const input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const strToNumArr = (str) => str.split(" ").map(Number);
    const [N, M] = strToNumArr(input.shift());
    const houses = [],
      cHouses = [];
    input.forEach((rowStr, r) => {
      const row = strToNumArr(rowStr);
      row.forEach((v, c) => {
        if (v === 1) {
          houses.push([r, c]);
        }
        if (v === 2) {
          cHouses.push([r, c]);
        }
      });
    });

    const result = solve({
      houses,
      cHouses,
      toSelect: M,
      startIndex: 0,
      cIndexCombination: [],
    });

    console.log(result);
  });

const solve = ({
  houses,
  cHouses,
  toSelect,
  startIndex,
  cIndexCombination,
}) => {
  if (!toSelect) {
    const cityCDist = getCityCDist({ houses, cHouses, cIndexCombination });
    return cityCDist;
  }
  let minCityCDist = Number.MAX_SAFE_INTEGER;
  for (let i = startIndex; i < cHouses.length; i++) {
    if (i > cHouses.length - toSelect) break;
    minCityCDist = Math.min(
      minCityCDist,
      solve({
        houses,
        cHouses,
        toSelect: toSelect - 1,
        startIndex: i + 1,
        cIndexCombination: cIndexCombination.concat(i),
      })
    );
  }
  return minCityCDist;
};

const getCityCDist = ({ houses, cHouses, cIndexCombination }) => {
  const result = houses.reduce((acc, [row, col]) => {
    let minD = Number.MAX_SAFE_INTEGER;
    cIndexCombination.forEach((i) => {
      const [r, c] = cHouses[i];
      minD = Math.min(minD, Math.abs(row - r) + Math.abs(col - c));
    });
    return acc + minD;
  }, 0);
  return result;
};
