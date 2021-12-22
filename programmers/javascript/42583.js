function solution(bridgeLength, maxWeight, truckWeights) {
  const N = truckWeights.length;
  const endList = [];
  const progressList = Array(bridgeLength).fill(0);
  let t = 0;

  while (endList.length !== N) {
    t++;
    const end = progressList.shift();
    if (end) {
      endList.push(end);
    }

    const progressSum = progressList.reduce((acc, curr) => {
      return acc + curr;
    }, 0);

    progressList.push(
      truckWeights.length && progressSum + truckWeights[0] <= maxWeight
        ? truckWeights.shift()
        : 0
    );
  }
  return t;
}
