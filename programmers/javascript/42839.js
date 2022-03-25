function solution(numbers) {
  const permutationSet = getPermutationSet(numbers);
  let result = 0;
  permutationSet.forEach((number) => {
    if (number <= 1) return;
    let isPrimeNumber = true;
    for (let n = 2; n <= Math.sqrt(number); n++) {
      if (number % n) continue;
      isPrimeNumber = false;
      break;
    }
    if (isPrimeNumber) result++;
  });
  return result;
}

const getCombinations = (arr, selectNum) => {
  const results = [];
  if (selectNum === 1) return arr.map((value) => [value]);

  arr.forEach((fixed, index) => {
    const rest = arr.slice(index + 1);
    const combinations = getCombinations(rest, selectNum - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    results.push(...attached);
  });

  return results;
};

const getPermutations = (inputArr) => {
  let result = [];

  const permute = (restArr, newArr = []) => {
    if (restArr.length === 0) {
      result.push(newArr);
      return;
    }
    for (let i = 0; i < restArr.length; i++) {
      const _rest = restArr.slice();
      const _new = _rest.splice(i, 1);
      permute(_rest, newArr.concat(_new));
    }
  };

  permute(inputArr);

  return result;
};

const getPermutationSet = (numbers) => {
  const permutationSet = new Set();
  for (let i = 1; i <= numbers.length; i++) {
    const combinations = getCombinations(numbers.split(""), i);
    combinations.forEach((combination) => {
      const permutations = getPermutations(combination);
      permutations.forEach((permutation) => {
        permutationSet.add(+permutation.join(""));
      });
    });
  }
  return permutationSet;
};
