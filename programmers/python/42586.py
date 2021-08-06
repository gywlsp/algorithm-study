def solution(progresses, speeds):
    answer = []
    while progresses:
        deployFuncCnt=0
        for i, speed in enumerate(speeds):
            progresses[i] += speed
        for progress in progresses:
            if progress<100:
                break;
            deployFuncCnt+=1
        if deployFuncCnt:
            answer.append(deployFuncCnt)
            progresses=progresses[deployFuncCnt:]
            speeds=speeds[deployFuncCnt:]
    return answer