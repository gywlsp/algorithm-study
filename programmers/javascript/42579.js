function solution(genres, plays) {
  const result = [];
  const genresMap = new Map();
  genres.forEach((name, index) => {
    const play = plays[index];
    const prev = genresMap.get(name);
    if (prev) {
      prev.musics.push([index, play]);
      prev.sum += play;
    } else {
      genresMap.set(name, {
        musics: [[index, play]],
        sum: play,
      });
    }
  });
  const sortedGenres = [...genresMap.values()].sort((a, b) => b.sum - a.sum);
  sortedGenres.forEach(({ musics }) => {
    musics.sort((a, b) => b[1] - a[1] || a[0] - b[0]);
    musics.slice(0, 2).forEach(([i, _]) => {
      result.push(i);
    });
  });
  return result;
}
