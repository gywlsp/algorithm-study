function solution(str1, str2) {
  const str1WordSet = getWordSet(str1.toLowerCase());
  const str2WordSet = getWordSet(str2.toLowerCase());

  const result =
    !str1WordSet.length && !str2WordSet.length
      ? 65536
      : getResult(str1WordSet, str2WordSet);
  return result;
}

const getWordSet = (str) => {
  const result = [];
  for (let i = 0; i < str.length - 1; i++) {
    const word = str.slice(i, i + 2);
    if (/^[a-zA-Z]*$/.test(word)) result.push(word);
  }
  return result;
};

const getResult = (set1, set2) => {
  let unionCount = set1.length + set2.length;
  const intersectionCount = set1.reduce((acc, word1) => {
    const index = set2.findIndex((word2) => word2 === word1);
    if (index === -1) return acc;
    set2.splice(index, 1);
    return acc + 1;
  }, 0);
  unionCount -= intersectionCount;
  return Math.floor((intersectionCount / unionCount) * 65536);
};
