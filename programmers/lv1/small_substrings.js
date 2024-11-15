// 크기가 작은 부분 문자열

function solution(t, p) {
  let answer = 0
  const pLength = p.length;
  const subLength = t.length - pLength
  
  for (let i = 0; i <= subLength; i++) {
      if (t.slice(i, i + pLength) <= p) answer++   
  }
  
  return answer;
}

// js는 숫자로 이루어진 문자열끼리의 비교 연산도 숫자형끼리의 연산과 동일한 결과로 수행 (Number로 굳이 변환해주지 않아도 되나 타입 안정성은..?)
// 루프가 길어지면 for 문의 length 계산을 매번 수행하는 것이 성능에 미세한 영향을 줄 수 있음
// js 자체에서 length 연산에 관해 최적화가 잘 되어 있고 t의 길이가 10000으로 제한되어 있지만, length만 구하는 것이 아니라 매번 - 연산을 추가로 해줘야 하기 때문에 고정된 값을 변수로 선언하여 반복 연산 방지하기
