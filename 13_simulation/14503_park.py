n, m = map(int, input().split())
a, b, d = map(int, input().split())
arr = [list(map(int,input().split())) for _ in range(n)]

dx=[-1, 0, 1, 0]
dy=[0, 1, 0, -1]
count = 0

def clean(x, y):
    global count
    if arr[x][y] == 0:
        arr[x][y] = 2
        count += 1

def check_clean_possible(x, y):
    for i in range(4):
        a = x + dx[i]
        b = y + dy[i]
        if 0 <= a < n and 0 <= b < m and arr[a][b] == 0:
            return True
    return False

def r(x, y, d):
    return (x + dx[d - 2], y + dy[d - 2])


move_x = a
move_y = b
move_d = d

while True:
    clean(move_x, move_y)
    if check_clean_possible(move_x, move_y):
        move_d -= 1
        move_d %= 4
        front_x = move_x + dx[move_d]
        front_y = move_y + dy[move_d]
        if arr[front_x][front_y] == 0:
            move_x = front_x
            move_y = front_y
    else:
        newX, newY = r(move_x, move_y, move_d)
        if arr[newX][newY] == 1:
            break
        else:
            move_x = newX
            move_y = newY

print(count)