function solution(lottos, win_nums) {
  let matchCnt = 0,
    randomCnt = 0;
  lottos.forEach((v) => {
    if (v === 0) {
      randomCnt++;
    }
    if (win_nums.includes(v)) {
      matchCnt++;
    }
  });

  const bestRank = 7 - (matchCnt + randomCnt || 1);
  const worstRank = 7 - (matchCnt || 1);

  return [bestRank, worstRank];
}
