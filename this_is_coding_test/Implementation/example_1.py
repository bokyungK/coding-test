# 상하좌우

N = int(input())
plans = input().split()

x = 1
y = 1

moves = ['L', 'R', 'U', 'D']
dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]

for plan in plans:
  idx = moves.index(plan)
  nx, ny = x + dx[idx], y + dy[idx]

  if nx < 1 or nx > N or ny < 1 or ny > N:
    continue
  x, y = nx, ny

print(x, y)

# 이동하기 전 보다 이동하고 나서 범위를 벗어났는지 비교하면 조건문을 더 간소화해서 작성할 수 있음
# 그래프의 x, y축으로 생각하니까 헷갈리는 것. 행렬의 행과 열로 제대로 구분하고 생각하기