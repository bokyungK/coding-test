# 게임 개발

n, m = map(int, input().split())
x, y, d = map(int, input().split())
map = []

for _ in range(n):
  map.append(input().split())

moves = [(0, -1), (1, 0), (-1, 0), (0, 1)]
map[x][y] = 'X'
cnt = 1
flag = True

while flag:
  for idx in range(4):
    if d == 0:
      d = 3
    else:
      d -= 1

    nx, ny = x + moves[d][0], y + moves[d][1]

    if map[nx][ny] == '0':
      map[nx][ny] = 'X'
      cnt += 1
      x, y = nx, ny
      continue
    else:
      if idx == 3:
        nx, ny = x - moves[d][0], y - moves[d][1]

        if map[nx][ny] == '1':
          flag = False
        else:
          x, y = nx, ny

print(cnt)
