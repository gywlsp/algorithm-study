function getCombination(arr, toPick) {
  const result = [];
  if (toPick === 1) {
    return arr.map((v) => [v]);
  }
  arr.forEach((fixed, index) => {
    const rest = arr.slice(index + 1);
    const restCombination = getCombination(rest, toPick - 1);
    const attached = restCombination.map((v) => [fixed, ...v]);
    result.push(...attached);
  });
  return result;
}

function solution(orders, course) {
  const result = [];
  course.forEach((toPick) => {
    const courseMap = new Map();
    let max = 0;
    orders.forEach((order) => {
      getCombination(order.split(""), toPick).forEach((arr) => {
        const key = arr.sort().join("");
        const value = (courseMap.get(key) || 0) + 1;
        courseMap.set(key, value);
        if (value > 1) {
          max = Math.max(max, value);
        }
      });
    });
    if (max >= 2) {
      courseMap.forEach((value, key) => {
        if (value === max) {
          result.push(key);
        }
      });
    }
  });
  return result.sort();
}
