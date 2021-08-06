from collections import Counter

def solution(participant, completion):
    pCounter = Counter(participant)
    cCounter = Counter(completion)
    
    remainCounter = pCounter-cCounter
    return list(remainCounter.keys())[0]
    