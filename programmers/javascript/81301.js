function solution(s) {
  let result = s;
  const NUMBERS = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  NUMBERS.forEach((number, index) => {
    while (result.includes(number)) {
      result = result.replace(number, index);
    }
  });
  return +result;
}
