// 신규 아이디 추천

// 첫 번째 풀이
function solution(new_id) {
  let answer = new_id
    .toLowerCase()
    .replace(/[^a-z0-9\-_.]/g, '')
    .replace(/\.{2,}/g, '.')
    .replace(/^[.]+|[.]+$/g, '');

  if (answer === '') {
      answer = 'a';
  }

  if (answer.length >= 16) {
      answer = answer.slice(0, 15).replace(/[.]+$/g, '');
  } else if (answer.length <= 2) {
      answer = answer + (answer[answer.length - 1].repeat(3 - answer.length));
  }

  return answer;
}

// 두 번째 풀이
function solution(new_id) {
  let answer = new_id
    .toLowerCase()
    .replace(/[^a-z0-9\-_.]/g, '')
    .replace(/\.{2,}/g, '.')
    .replace(/^[.]+|[.]+$/g, '')
    .padEnd(1, 'a')
    .slice(0, 15)
    .replace(/[.]+$/g, '')
  
  return answer.padEnd(3, answer[answer.length - 1]);
}

// 정규식을 더 자유자재로 사용할 수 있도록 깊이 있는 이해가 필요
// 첫 번째 문자열과 동일하게 동작하는 코드를 특정 메서드와 정규식을 활용하여 체이닝할 수 있음 (가독성 향상)
  // padEnd를 사용하여 지정된 길이에 도달하도록 주어진 문자열을 채울 수 있음 (정규식으로도 해결 가능)