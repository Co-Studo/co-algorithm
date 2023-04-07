from itertools import product

n, m = map(int, input().split())

arr = [list(map(int, input().split())) for _ in range(n)]

cctvs = []

dx = [-1, 0, 1, 0]
dy = [0, -1, 0 ,1]

result = int(1e9)

for i in range(n):
    for j in range(m):
        if arr[i][j] != 0 and arr[i][j] != 6:
            cctvs.append(((i,j), arr[i][j]))
dirs = list(product([0,1,2,3], repeat = len(cctvs)))

def move(x, y, front, d, arr):
    a = x
    b = y
    direction = -1
    if d == 'front':
        direction = front
    elif d == 'back':
        direction = front - 2
    elif d == 'left':
        direction = (front + 1) % 4
    elif d == 'right':
        direction = front - 1

    while 0 <= a < n and 0 <= b < m and arr[a][b] != 6:
        a += dx[direction]
        b += dy[direction]
        if 0 <= a < n and 0 <= b < m and arr[a][b] == 0:
            arr[a][b] = '#'

for directions in dirs:
    tempArr = [item[:] for item in arr]
    count = 0
    for i in range(len(cctvs)):
        cctvPos, num = cctvs[i]
        direction = directions[i]
        x, y = cctvPos
        if num == 1:
            move(x, y, direction, 'front', tempArr)
        elif num == 2:
            move(x, y, direction, 'front', tempArr)
            move(x, y, direction, 'back', tempArr)
        elif num == 3:
            move(x, y, direction, 'front', tempArr)
            move(x, y, direction, 'left', tempArr)
        elif num == 4:
            move(x, y, direction, 'front', tempArr)
            move(x, y, direction, 'back', tempArr)
            move(x, y, direction, 'left', tempArr)
        elif num == 5:
            move(x, y, direction, 'front', tempArr)
            move(x, y, direction, 'back', tempArr)
            move(x, y, direction, 'left', tempArr)
            move(x, y, direction, 'right', tempArr)
    for j in range(n):
        for k in range(m):
            if tempArr[j][k] == 0:
                count += 1
    if result > count:
        result = count

print(result)