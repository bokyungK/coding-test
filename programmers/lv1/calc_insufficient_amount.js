// 부족한 금액 계산하기

// 첫 번째 풀이 (반복문을 사용하여 누적 계산, 시간 복잡도 O(n))
function solution(price, money, count) {
  let answer = 0;

  for (let i = 1; i <= count; i++) {
      answer += price * i
  }

  return answer - money > 0 ? answer - money : 0 ;
}

// 두 번째 풀이 (등차 수열의 합 공식 및 삼항 연산자 제거하여 코드 리팩토링, 시간 복잡도 O(1))
function solution(price, money, count) {
  let answer = count * (price + price * count);
  answer = Math.floor(answer / 2);
  
  return Math.max(0, answer - money);
}
