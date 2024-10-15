# 왕실의 나이트

position = input()
x = int(ord(position[0])) - int(ord('a')) + 1
y = int(position[1])

moves = [(-1, -2), (1, -2), (-1, 2), (1, 2), (-2, -1), (-2, 1), (2, -1), (2, 1)]
cnt = 0

for move in moves:
  nx, ny = x + move[0], y + move[1]

  if nx < 1 or nx > 8 or ny < 1 or ny > 8:
    continue

  cnt += 1

print(cnt)

# 해결방법
# 8가지 경우의 수 동작을 순차적으로 수행하면서 범위에 포함되는 경우 cnt += 1 수행
# 시작점 기준으로 8번 체크가 필요하기 때문에 x, y는 갱신하지 않도록 주의

# 리팩토링
# x값(알파벳)을 숫자로 변환하는 작업은 한 번만 필요하기 때문에 배열을 만들어서 idx 값으로 변환하는 것보다 ord로 찾는 것이 공간복잡도에 더 좋음
# 모든 move 동작이 수행돼야 하기 때문에 LLU, LLD, ...를 담고 있는 move list가 따로 필요 없음
# dx, dy 리스트를 따로 만들어도 되지만 내부에서 튜플로 구분해도 가독성 좋음