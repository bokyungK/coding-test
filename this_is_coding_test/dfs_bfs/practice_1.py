# 음료수 얼려 먹기
n, m = map(int, input().split())
iceBox = []
moves = [(-1, 0), (0, -1), (1, 0), (0, 1)]
cnt = 0

for _ in range(n):
  iceBox.append(list(input()))

def dfs(i, j):
  if i <= -1 or i >= n or j <= -1 or j >= m:
    return

  if iceBox[i][j] == '0':
    iceBox[i][j] = '1'

    for k in moves:
      dfs(i + k[0], j + k[1])

    return True
  else:
    return False

for i in range(n):
  for j in range(m):
    if dfs(i, j):
      cnt += 1

print(cnt)

# dfs, bfs 모두 전체 데이터를 탐색하지만 순서가 다르기 때문에 필요한 용도에 따라 선택