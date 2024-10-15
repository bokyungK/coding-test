# 시각

N = int(input())
cnt = 0

for hour in range(N + 1):
  for min in range(60):
    for sec in range(60):
      time = str(hour) + str(min) + str(sec)

      if '3' in time:
        cnt += 1

print(cnt)

# 0을 제외한 양수, 음수 모든 값은 True로 평가되므로 time.find('3')로 조건을 주면 모든 결과가 출력됨