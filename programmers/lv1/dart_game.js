// 다트 게임

function solution(dartResult) {
  const bonus = { 'S': 1, 'D': 2, 'T': 3 };
  const options = { '*': 2, '#': -1 }
  const scores = [];
  let totalScore = 0;
  
  [...dartResult].forEach((str, idx) => {
    if (!isNaN(str)) {
      if (dartResult[idx - 1] === '1') {
        totalScore = 10;
      } else {
        scores.push(totalScore);
        totalScore = Number(str);
      }
    } 
      
    totalScore = totalScore ** (bonus[str] || 1);
    totalScore *= (options[str] || 1);
    scores[scores.length - 1] *= (options[str] > 0 ? options[str] : 1);
  })
  
  scores.push(totalScore);
  return scores.reduce((a, b) => a + b, 0);
}

// 숫자를 만날 때마다 이전 점수를 배열에 저장하고 새로운 점수 계산
// 숫자가 두자리인 경우 예외처리 작업 (조건이 한정적이기 때문에 10인 경우만 처리)
// bonus와 options 객체를 분리하면 가독성 개선 가능