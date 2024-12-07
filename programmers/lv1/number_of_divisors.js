// 약수의 개수와 덧셈

// 첫 번째 풀이 (제곱근까지만 약수의 개수를 직접 계산)
function solution(left, right) {
  let answer = 0;
  
  for (let i = left; i <= right; i++) {
      let cnt = 0;
      
      for (let j = 1; j * j <= i; j++) {
          if (i % j === 0) {
              cnt += j * j === i ? 1 : 2;
          }
      }
      
      answer += (cnt % 2 === 0 ? i : -i);
  }
  
  return answer;
}

// 두 번째 풀이 (제곱근이 정수면 약수의 개수가 홀수라는 규칙 활용)
function solution(left, right) {
    let answer = 0;

    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}
