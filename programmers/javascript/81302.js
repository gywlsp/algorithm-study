function solution(places) {
  const diff = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ];
  const SIZE = 5;

  const isPosValid = (r, c) => r >= 0 && c >= 0 && r < SIZE && c < SIZE;

  const checkAround = (start, place, checked) => {
    let ret = true;
    const queue = [start];

    while (queue.length > 0) {
      const [r, c, len] = queue.shift();

      if (len !== 0 && place[r][c] === "P") {
        ret = false;
        break;
      }

      diff.forEach(([dr, dc]) => {
        const nextR = r + dr;
        const nextC = c + dc;

        if (
          isPosValid(nextR, nextC) &&
          !checked[nextR][nextC] &&
          place[nextR][nextC] !== "X" &&
          len < 2
        ) {
          checked[nextR][nextC] = true;
          queue.push([nextR, nextC, len + 1]);
        }
      });
    }

    return ret;
  };
  const checkPlace = (place) => {
    const checked = place.map(() => Array(SIZE).fill(false));
    let ret = 1;
    for (let r = 0; r < SIZE; r++) {
      for (let c = 0; c < SIZE; c++) {
        if (place[r][c] !== "P") continue;
        checked[r][c] = true;
        if (checkAround([r, c, 0], place, checked)) continue;
        ret = 0;
        break;
      }
    }
    return ret;
  };

  return places.map(checkPlace);
}
