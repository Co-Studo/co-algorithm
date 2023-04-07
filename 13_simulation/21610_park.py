n, m = map(int, input().split())

arr = [list(map(int,input().split())) for _ in range(n)]

moves = [tuple(map(int, input().split())) for _ in range(m)]

clouds = [(n-1, 0), (n-1, 1), (n-2, 0), (n-2, 1)]

dx=[0, -1, -1, -1, 0, 1, 1, 1]
dy=[-1, -1, 0, 1, 1, 1, 0, -1]

def checkDiagonal(a, b):
    count = 0
    if(a-1 >= 0 and b-1 >= 0 and arr[a-1][b-1] != 0):
        count += 1
    if(a-1 >= 0 and b+1 < n and arr[a-1][b+1] != 0):
        count += 1
    if(a+1 < n and b-1 >= 0 and arr[a+1][b-1] != 0):
        count += 1
    if(a+1 < n and b+1 < n and arr[a+1][b+1] != 0):
        count += 1
    return count

for move in moves:
    direct, count = move
    moveClouds = list(map(lambda cloud: ((cloud[0]+(dx[direct-1]) * count) % n, (cloud[1]+(dy[direct-1]) * count) % n), clouds))

    for moveCloud in moveClouds:
        x, y = moveCloud
        arr[x][y] += 1
    for moveCloud in moveClouds:
        x, y = moveCloud
        plus = checkDiagonal(x, y)
        arr[x][y] += plus

    newClouds = []

    for i in range(n):
        for j in range(n):
            if (i, j) not in moveClouds and arr[i][j] >= 2:
                arr[i][j] -= 2
                newClouds.append((i, j))

    clouds = newClouds

result = 0

for i in range(n):
    for j in range(n):
        result += arr[i][j]

print(result)