function solution(expression) {
  const [numbers, operators] = parseExpression(expression);
  const operatorSet = operators.reduce((acc, curr) => {
    acc.add(curr);
    return acc;
  }, new Set());
  const operatorPermutations = getPermutations([...operatorSet]);
  const answer = operatorPermutations.reduce(
    (prev, priority) =>
      Math.max(
        prev,
        Math.abs(calculate(numbers.map(Number), [...operators], priority))
      ),
    0
  );

  return answer;
}

function calculate(numbers, operators, priority) {
  priority.forEach((operator) => {
    while (true) {
      const oIndex = operators.findIndex((v) => v === operator);
      if (oIndex === -1) break;
      let temp = 0;
      if (operator === "+") temp = numbers[oIndex] + numbers[oIndex + 1];
      else if (operator === "*") temp = numbers[oIndex] * numbers[oIndex + 1];
      else if (operator === "-") temp = numbers[oIndex] - numbers[oIndex + 1];
      numbers[oIndex] = temp;
      numbers.splice(oIndex + 1, 1);
      operators.splice(oIndex, 1);
    }
  });
  return numbers[0];
}

function parseExpression(expression) {
  const numbers = expression.split(/[\+\-\*]/);
  const operators = [];
  let curr = numbers[0].length;
  for (let i = 1; i < numbers.length; i++) {
    operators.push(expression[curr]);
    curr += numbers[i].length + 1;
  }
  return [numbers, operators];
}

const getPermutations = (arr) => {
  const result = [];

  const permute = (restArr, newArr = []) => {
    if (!restArr.length) {
      result.push(newArr);
      return;
    }
    for (let i = 0; i < restArr.length; i++) {
      const _rest = restArr.slice();
      const _new = _rest.splice(i, 1);
      permute(_rest, newArr.concat(_new));
    }
  };

  permute(arr);

  return result;
};
