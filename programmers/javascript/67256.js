function solution(numbers, hand) {
  const left = [1, 4, 7],
    right = [3, 6, 9];
  let leftHand = 10,
    rightHand = 12;
  const result = numbers.reduce((acc, curr) => {
    if (curr === 0) {
      curr = 11;
    }
    if (left.includes(curr)) {
      leftHand = curr;
      return acc + "L";
    }
    if (right.includes(curr)) {
      rightHand = curr;
      return acc + "R";
    }
    const [lx, ly] = [
      Math.abs(((curr - 1) % 3) - ((leftHand - 1) % 3)),
      Math.abs(Math.floor((curr - 1) / 3) - Math.floor((leftHand - 1) / 3)),
    ];
    const [rx, ry] = [
      Math.abs(((curr - 1) % 3) - ((rightHand - 1) % 3)),
      Math.abs(Math.floor((curr - 1) / 3) - Math.floor((rightHand - 1) / 3)),
    ];
    const lDist = lx + ly,
      rDist = rx + ry;
    if (lDist < rDist) {
      leftHand = curr;
      return acc + "L";
    }
    if (lDist > rDist) {
      rightHand = curr;
      return acc + "R";
    }
    if (hand === "left") {
      leftHand = curr;
      return acc + "L";
    }
    rightHand = curr;
    return acc + "R";
  }, "");
  return result;
}
