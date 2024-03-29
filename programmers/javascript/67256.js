function solution(numbers, hand) {
  const left = [1, 4, 7],
    right = [3, 6, 9];
  let leftHand = 10,
    rightHand = 12;

  const select = (number, hand) => {
    if (hand === "left") {
      leftHand = number;
      return "L";
    }
    if (hand === "right") {
      rightHand = number;
      return "R";
    }
  };

  const getDist = (a, b) => {
    return (
      Math.abs(((a - 1) % 3) - ((b - 1) % 3)) +
      Math.abs(Math.floor((a - 1) / 3) - Math.floor((b - 1) / 3))
    );
  };

  const result = numbers.reduce((acc, curr) => {
    if (curr === 0) {
      curr = 11;
    }
    if (left.includes(curr)) {
      return acc + select(curr, "left");
    }
    if (right.includes(curr)) {
      return acc + select(curr, "right");
    }

    const lDist = getDist(curr, leftHand),
      rDist = getDist(curr, rightHand);
    if (lDist < rDist) {
      return acc + select(curr, "left");
    }
    if (lDist > rDist) {
      return acc + select(curr, "right");
    }
    if (hand === "left") {
      return acc + select(curr, "left");
    }
    return acc + select(curr, "right");
  }, "");
  return result;
}
