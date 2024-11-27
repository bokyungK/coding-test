// 콜라 문제

function solution(a, b, n) {
  let answer = 0;
  
  while (n >= a) {
      const getCnt = Math.floor(n / a);
      answer += getCnt * b;
      n = n - getCnt * (a - b)
  }
  
  return answer;
}

// 제출한 콜라를 제외한 나머지 값(n % a) + 돌려받은 콜라(Math.floor(n / a) * b)를 통해 n을 갱신하면서 돌려받은 콜라의 값을 answer에 합산