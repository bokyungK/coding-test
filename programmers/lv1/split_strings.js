// 문자열 나누기

function solution(s) {
  let answer = 0;
  let startTxt = s[0];
  let sameCnt = 0;
  
  for (let i = 0; i < s.length; i++) {
      if (sameCnt === 0) {
          answer++
          sameCnt = 1;
          startTxt = s[i];
      } else {
          if (startTxt === s[i]) sameCnt++
          else sameCnt--
      }
  }

  return answer;
}

// 처음에 sameCnt와 diffCnt를 나누어서 비교했는데, 첫 문자와 같은지 아닌지 '두 조건'만으로 카운트를 하기 때문에 변수를 하나만 사용해도 된다.
  // 예를들어, sameCnt 하나만 두고 첫 문자와 같으면 ++ 연산을해주고 다르면 -- 연산을 해줄때 sameCnt가 0이되면 sameCnt와 diffCnt가 같다는 것과 동일하다.
// 만약 sameCnt != diffCnt인 상태로 종료가 되더라도 문제에서는 카운팅을 최소 한번은 하게끔 요구한다.
  // 따라서 sameCnt > diffCnt로 계속해서 순회하다 종료되더라도 처음이 answer++를 처리해주기 때문에 문제가 되지 않는다.
  // 결과값을 카운트하는 위치를 어디에 두느냐에 따라 로직이 간단해질 수 있으므로, 카운팅을 어떤 순간에 해야하는지 정의하고 풀자.
