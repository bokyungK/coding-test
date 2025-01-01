// 모의고사

function solution(answers) {
  // Calculation of scores
  const mathHater1 = [1, 2, 3, 4, 5];
  const mathHater2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const mathHater3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const answer = [];
  const scores = [0, 0, 0];
  
  answers.forEach((ans, ansIdx) => {
    [mathHater1, mathHater2, mathHater3].forEach((haterAnswer, haterIdx) => {
      if (ans === haterAnswer[ansIdx % haterAnswer.length]) {
        scores[haterIdx] += 1;
      }
    })
  })
  
  // Pick the person with the highest score
  const maxScore = Math.max(...scores);
      
  scores.forEach((score, idx) => {
    if (maxScore === score) {
      answer.push(idx + 1);
    }
  })
  
  return answer;
}

// 처음에는 scores를 객체로 만들었는데 결과에 인덱스 값만 필요하기 때문에 이 경우에는 배열을 사용하는게 코드 가독성이 더 좋다.
// scores를 배열로 사용하면 불필요하게 객체에서 values만 추출할 필요가 없어 성능이 더 향상된다.