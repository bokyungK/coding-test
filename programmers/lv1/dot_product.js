// 내적

// 첫 번째 풀이
function solution(a, b) {
  let answer = 0;

  for (let i = 0; i < a.length; i++) {
      answer += a[i] * b[i];
  }

  return answer;
}

// 두 번째 풀이
function solution(a, b) {    
  const answer = a.reduce((acc, _, idx) => {
      return acc + a[idx] * b[idx];
  }, 0)
  
  return answer;
}

// reduce를 사용하면 불필요하게 두 번째 매개변수를 전달받는다.
// 이 때, '_' 기호를 사용하여 암묵적으로 사용되지 않는 변수임을 명시할 수 있으나, 해당 변수에 값이 할당되는 것은 달라지지 않는다.
// 따라서 불필요한 변수 사용을 원하지 않는다면 정석적인 첫 번째 풀이를, 함수형으로 조금 더 현대적인 코드를 원한다면 두 번째 풀이를 선택하면 된다.