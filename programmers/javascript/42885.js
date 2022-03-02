function solution(people, limit) {
  people.sort((a, b) => b - a);
  let result = 0,
    left = 0,
    right = people.length - 1;
  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      right--;
    }
    left++;
    result++;
  }
  return result;
}
