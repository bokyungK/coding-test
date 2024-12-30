// 실패율

function solution(N, stages) {
  const usersPerStage = new Array(N).fill(0);
  const totalUsers = stages.length;
  let beforeUsers = 0;
  
  stages.forEach((userStage) => {
    if (userStage - 1 < N) {
        usersPerStage[userStage - 1] += 1;   
    }
  })
  
  const failureRateArr =  usersPerStage.map((userCnt, idx) => {
    const failureRate = userCnt / (totalUsers - beforeUsers);
    beforeUsers += userCnt;
  
    return { rate: failureRate, stage: idx + 1 };
  })
 
  const answer = failureRateArr.sort((a, b) => b.rate - a.rate).map(item => item.stage);
  return answer;
}

// 변수명의 길이가 너무 길지 않으면서 더 명확한 의미 전달을 할 수 있는 컨벤션 참고 필요!