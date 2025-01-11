// 신고 결과 받기

function solution(id_list, report, k) {
  const users = new Map();
  const answer = [];
  
  id_list.forEach((name, idx) => {
    users.set(name, { idx, reporter: new Set() });
    answer.push(0);
  })

  report.forEach((situation) => {
    const [goodUser, badUser] = situation.split(' ');
    users.get(badUser).reporter.add(goodUser);
  })

  for (const name of users.keys()) {
    const { reporter } = users.get(name);
    
    if (reporter.size >= k) {
      for (const name of reporter) {
        answer[users.get(name).idx] += 1;  
      }
    }
  }
    
  return answer;
}

// 시간 복잡도가 높아 분석 후 리팩토링 필요!