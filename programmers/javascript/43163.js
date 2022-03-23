function solution(begin, target, words) {
  if (!words.includes(target)) {
    return 0;
  }

  let result = Number.MAX_SAFE_INTEGER;

  const convert = (selectedWords) => {
    const lastWord = selectedWords[selectedWords.length - 1];
    if (lastWord === target) {
      result = Math.min(result, selectedWords.length - 1);
    }

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (selectedWords.includes(word)) continue;
      let diff = 0;
      for (let j = 0; j < word.length; j++) {
        if (word[j] !== lastWord[j]) {
          diff++;
        }
      }
      if (diff === 1) convert([...selectedWords, word]);
    }
  };

  convert([begin]);

  return result;
}
