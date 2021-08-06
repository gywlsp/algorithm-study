from collections import deque

def solution(priorities, location):
    priorities = deque(priorities)
    isMine = deque([False] * len(priorities))
    isMine[location] = True
    
    t = 1
    while True:
        if priorities[0] == max(priorities):
            if isMine[0]:
                return t
            else:
                priorities.popleft()
                isMine.popleft()
                t += 1
        else:
            priorities.rotate(-1)
            isMine.rotate(-1)