# 미로 탈출
from collections import deque

n, m = map(int, input().split())
maze = []

for _ in range(n):
  maze.append(list(map(int, input())))

moves = [(-1, 0), (0, -1), (1, 0), (0, 1)]
queue = deque()
queue.append((0, 0))

while queue:
  row, col = queue.popleft()

  for move in moves:
    nextRow = row + move[0]
    nextCol = col + move[1]

    if nextRow <= -1 or nextRow >= n or nextCol <= -1 or nextCol >= m:
      continue

    if maze[nextRow][nextCol] == 1 and not (nextRow == 0 and nextCol == 0):
      queue.append((nextRow, nextCol))
      maze[nextRow][nextCol] = maze[row][col] + 1

print(maze[n - 1][m - 1])

# (line 15) pop한 값을 변수에 저장하여 사용하면 이전 값 관련 데이터를 사용할 때 편리함