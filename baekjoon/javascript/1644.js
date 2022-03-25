const input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const N = +input[0];
    const isPrimeNumber = Array(N + 1).fill(true);
    (isPrimeNumber[0] = false), (isPrimeNumber[1] = false);
    for (let n = 2; n <= N / 2; n++) {
      for (let i = 2; i <= N / n; i++) {
        isPrimeNumber[n * i] = false;
      }
    }
    const primeNumbers = isPrimeNumber.reduce((acc, curr, index) => {
      if (curr) acc.push(index);
      return acc;
    }, []);

    let end = 0,
      sum = 0,
      result = 0;
    for (let start = 0; start < primeNumbers.length; start++) {
      while (sum < N && end < primeNumbers.length) {
        sum += primeNumbers[end++];
      }
      if (sum === N) result++;
      sum -= primeNumbers[start];
    }

    console.log(result);
  });
