import math

result = 0
n, m = map(int, input().split())

arr = [list(map(int, input().split())) for _ in range(n)]

blizards = [tuple(map(int, input().split())) for _ in range(m)]

depth = math.ceil(n/2)
shark = (depth-1, depth-1)

def spiral_search(shark):
    start = (shark[0], shark[1]-1)
    path = [start]
    cur = 1

    while(cur < depth):
        for _ in range(2 * cur - 1):
            x, y = start
            start = (x+1, y)
            path.append(start)

        for _ in range(2 * cur):
            x, y = start
            start = (x, y+1)
            path.append(start)

        for _ in range(2 * cur):
            x, y = start
            start = (x-1, y)
            path.append(start)

        for _ in range(2 * cur + 1):
            x, y = start
            start = (x, y-1)
            path.append(start)
        cur += 1

    path.pop()
    return path

path = spiral_search(shark)

direct=[(-1, 0), (1, 0), (0, -1), (0,1)]

for blizard in blizards:
    a, b = blizard
    dx, dy = direct[a-1]
    for i in range(1, b+1):
        x, y = shark
        arr[x + dx * i][y + dy * i] = 0
    # 연속한 구슬 터뜨리기
    breakPoint = True
    while(breakPoint):
        breakPoint = False
        curNum = -1
        curList = []
        for j in range(n * n - 1):
            a, b = path[j]
            if arr[a][b] == 0:
                continue
            if arr[a][b] != curNum:
                if len(curList) >= 4:
                    for pos in curList:
                        x, y = pos
                        arr[x][y] = 0
                    result += len(curList) * curNum
                    breakPoint = True
                curNum = arr[a][b]
                curList = [(a, b)]
            elif arr[a][b] == curNum:
                curList.append((a, b))
        if len(curList) >= 4:
            for pos in curList:
                x, y = pos
                arr[x][y] = 0
            result += len(curList) * curNum
            breakPoint = True

    # arr 탐색하며 새로운 arr 만들기
    curNum = -1
    curCount = 1
    newValues = []
    for i in range(n * n - 1):
        a, b = path[i]
        if(arr[a][b] == 0):
            continue
        if(curNum == -1):
            curNum = arr[a][b]
        elif(arr[a][b] != curNum):
            newValues.append(curCount)
            newValues.append(curNum)
            curCount = 1
            curNum = arr[a][b]
        elif(arr[a][b] == curNum):
            curCount += 1
    if curNum != -1:
        newValues.append(curCount)
        newValues.append(curNum)

    for i in range(n * n - 1):
        a, b = path[i]
        if(i >= len(newValues)):
            arr[a][b] = 0
        else:
            arr[a][b] = newValues[i]

print(result)