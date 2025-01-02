// 다른 사람의 풀이

function solution(array, commands) {
  const answer = commands.map((command) => {
      const [i, j, k] = command;
      const filteredArr = array.slice(i - 1, j);
      
      filteredArr.sort((a, b) => a - b);
      return filteredArr[k - 1];
  })
  
  return answer;
}

// 원본 배열을 변경하지 않고 안전하게 새로운 배열을 만들면서 정렬하려면 배열 메서드인 toSorted를 사용할 수 있다.
// 코딩 테스트 브라우저 환경에서는 아직 해당 메서드를 지원하지 않는 경우가 있으니 주의해서 사용!