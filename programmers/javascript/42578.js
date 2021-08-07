function solution(clothes) {
  const clothesCountMap = new Map();
  clothes.forEach(([_, type]) => {
    const prev = clothesCountMap.get(type) || 0;
    clothesCountMap.set(type, prev + 1);
  });
  const clothesCounts = [...clothesCountMap.values()];
  const answer = clothesCounts.reduce((acc, cnt) => acc * (cnt + 1), 1) - 1;
  return answer;
}
