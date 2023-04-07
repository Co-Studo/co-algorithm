n, m = map(int, input().split())

arr = [0] * m
isused = [0] * (n + 1)

def func(k):
    if k == m:
        print(" ".join(map(str, arr)))
        return
    else:
        for i in range(1, n+1):
            if isused[i] == 1: continue
            isused[i] = 1
            arr[k] = i
            func(k+1)
            isused[i] = 0

func(0)
