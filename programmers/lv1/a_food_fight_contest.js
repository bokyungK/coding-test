// 푸드 파이터 대회

function solution(food) {
  let answer = '';
  
  for (let i = 1; i < food.length; i++) {
      answer += String(i).repeat(Math.floor(food[i] / 2));
  }
  
  return answer + '0' + [...answer].reverse().join('');
}

// left, right로 분리해서 문자열 정방향, 역방향 버전을 따로 만들어주는 방식으로 작업하면 문자열의 길이가 길어질 수록 복잡도가 증가한다.
// 문자열은 불변성을 가지므로 매번 새로운 문자열을 연결하는 작업을 두 번씩 반복하기 때문이다.
// 따라서 메모리가 조금 더 사용되더라도 정방향 문자열을 배열로 변환 후 reverse 처리를 해주는 것이 더 최적화에 좋은 방법이다.