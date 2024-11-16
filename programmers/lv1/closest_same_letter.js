// 가장 가까운 같은 글자

function solution(s) {
  const lastIdxs = {}
  const answer = [...s].map((alphabet, idx) => {
      const result = alphabet in lastIdxs ? idx - lastIdxs[alphabet] : -1
      lastIdxs[alphabet] = idx
      return result
  })

  return answer;
}

// 조건문과 실행문이 간단한 경우 삼항연산자를 쓰면 변수 선언과 할당 부분을 한 줄로 작성할 수 있어 가독성이 좋고 따로 초기화하지 않아도 됨
// return을 한 곳에서 처리하기 위해 result 변수를 쓰는 것 뿐만 아니라, return 이후 코드는 실행되지 않으므로 이 로직에서는 result 변수를 사용할 수 밖에 없다.
  // lastIdxs[alphabet] = idx 코드는 무조건 result를 할당한 후에 실행해야 이전 문자와의 차이값을 정확하게 구할 수 있기 때문 (result 전에 실행하면 현재 값을 포함)