import time


class State:
    def __init__(self, board, goal, moves=0):
        self.board = board
        self.moves = moves
        self.goal = goal

    def get_new_board(self, i1, i2, moves):
        new_board = self.board[:]
        new_board[i1], new_board[i2] = new_board[i2], new_board[i1]
        return State(new_board, self.goal, moves)

    def expand(self, moves):
        result = []
        i = self.board.index(0)
        if not i in [0, 1, 2]:
            result.append(self.get_new_board(i, i-3, moves))
        if not i in [0, 3, 6]:
            result.append(self.get_new_board(i, i-1, moves))
        if not i in [6, 7, 8]:
            result.append(self.get_new_board(i, i+3, moves))
        if not i in [2, 5, 8]:
            result.append(self.get_new_board(i, i+1, moves))
        return result

    def __str__(self):
        return str(self.board[:3]) + '\n' + str(self.board[3:6]) + '\n' + str(self.board[6:]) + '\n' + "--------------------"

    def __eq__(self, other):
        return self.board == other.board


puzzle = [1, 2, 3, 4, 0, 5, 7, 8, 6]
goal = [1, 2, 3, 4, 5, 6, 7, 8, 0]

start = time.time()

open_list = []
open_list.append(State(puzzle, goal))
print("--------------------")

closed = []
moves = 0

i = 0
while len(open_list) != 0:
    current = open_list.pop(0)
    i += 1
    print("##", i)
    print(current)

    if current.board == goal:
        print("탐색 성공")
        break
    moves = current.moves + 1
    closed.append(current)

    for state in current.expand(moves):
        if (state in closed) or (state in open_list):
            continue
        else:
            open_list.append(state)

print("bfs count : ", i)
print("bfs 소요시간 : ", time.time()-start)
