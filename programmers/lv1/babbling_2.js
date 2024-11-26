// 옹알이 (2)

// 첫 번째 풀이 (문자열 직접 찾기)
function solution(babbling) {
  let answer = 0;
  
  babbling.forEach((item) => {
      let cnt;
      let prev = '';
      let flag = false;
      
      for (let i = 0; i < item.length; i += cnt) {
          const test = item.slice(i, i + 3);
          const test2 = item.slice(i, i + 2);

          if (prev === test || prev === test2) {
              flag = false;
              break;
          }

          if (test === 'aya' || test === 'woo') {
              prev = test;
              cnt = 3;
              flag = true;
          } else if (test2 === 'ye' || test2 === 'ma') {
              prev = test2;
              cnt = 2;
              flag = true;
          } else {
              flag = false;
              break;
          }
      }
      
      if (flag) {
          answer++
      }
  })
  
  return answer;
}

// 두 번째 풀이 (정규식 검사)
function solution(babbling) {
  const isRepeated = /(aya|ye|woo|ma)\1+/;
  const isIncluded = /^(aya|ye|woo|ma)+$/;

  return babbling.reduce((ans, word) => (
    !isRepeated.test(word) && isIncluded.test(word) ? ++ans : ans
  ), 0);
}

// 처음에는 문자열을 직접 검토하면서 이전 문자열과 같은지, 같지 않다면 옹알이가 가능한 단어인지 방식으로 풀이
// 하지만 정규식을 사용하면 특정 문자열들이 반복되는지, 특정 문자열들이 포함되는지 간단한 코드로 조건을 확인할 수 있음
// 첫 번째 코드와 두 번째 코드 모두 시간 복잡도는 O(m x n), 공간 복잡도는 O(1)이므로 문자열정규식에 복잡한 패턴이 없다면 두 번째 코드가 훨씬 간결하고 가독성이 좋다.
// '문자열'의 패턴을 찾아 조건을 검사하는 경우 '정규식'을 활용할 수 있는지 생각해보고 풀기