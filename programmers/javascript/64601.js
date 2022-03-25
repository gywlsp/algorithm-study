function solution(board, moves) {
  const stack = [];
  let result = 0;
  moves.forEach((v) => {
    let r;
    const c = v - 1;
    for (r = 0; r < board.length; r++) {
      if (board[r][c]) break;
    }
    if (r < board.length) {
      const top = board[r][c];
      board[r][c] = 0;
      if (stack[stack.length - 1] === top) {
        stack.pop();
        result += 2;
      } else stack.push(top);
    }
  });
  return result;
}
