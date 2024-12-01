// 나머지가 1이 되는 수 찾기

function solution(n) {
  let answer = 1;
  
  while (n % answer !== 1) {
      answer++;
  }
  
  return answer;
}