// 과일 장수

// 버전 1 (복잡도 O(n))
function solution(k, m, score) {
    let answer = 0;

    score.sort((a, b) => b - a);
    score.forEach((apple, idx) => {
      if ((idx + 1) % m === 0) {
        answer += apple * m;
      }
    })

    return answer;
}

// 버전 2 (복잡도 O(n/m))
function solution(k, m, score) {
  let answer = 0;

  score.sort((a, b) => b - a);
  for (let i = m - 1; i < score.length; i += m) {
    answer += score[i] * m
  }

  return answer;
}

// 각 과일 상자의 최소값을 기준으로 상자당 가격을 책정하기 때문에, 아무리 큰 값들이 많아도 최소값이 저렴한 과일이 포함되어 있으면 이익이 낮아진다.
// 따라서 점수가 높은 과일 끼리, 낮은 과일 끼리 분류되도록 내림차순으로 정렬하고 순회하면 idx + 1이 m의 배수일 때(그 상자에서 가장 작은 값)의 과일 점수와 m만 곱해서 결과에 더해주면 된다.
// for문을 사용해서 i의 초기 값을 m으로 설정하고 m간격으로 i를 가산하여 수행하면 m의 배수 여부를 확인하는 if 조건문 없이 처리할 수 있으며 불필요한 반복 횟수를 줄일 수 있다. (버전 1은 가독성에 유리, 버전 2는 성능에 유리)