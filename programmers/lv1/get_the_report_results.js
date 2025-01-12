// 신고 결과 받기

// 첫 번째 코드
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

// 두 번째 코드 (리팩토링 -> 데이터를 관리하는 변수 분리, 초기화를 한번에 처리, 배열과 객체를 사용)
function solution(id_list, report, k) {
  const indexes = {};
  const reports = [];
  const answer = [];
  
  id_list.forEach((name, idx) => {
    indexes[name] = idx;
    reports.push(new Set());
    answer.push(0);
  })

  report.forEach((names) => {
    const [reporter, reported] = names.split(' ');
    const index = indexes[reported];
    reports[index].add(reporter);
  })
  
  reports.forEach((names) => {
    if (names.size >= k) {
      for (const name of names) {
        answer[indexes[name]] += 1;
      }
    }
  })
  
  return answer;
}

// 첫 번째 코드
// 유저의 index 정보와 신고자 정보를 하나의 자료구조에서 관리했다.
// 이 경우 데이터를 읽고 쓰는 코드가 길어져 가독성이 떨어졌다.

// 두 번째 코드
// 따라서 두 번째 코드에서 indexes 객체, reports 배열을 분리했다.
// reports는 id_list의 길이와 동일하게 초기화하여 유저의 index를 기준으로 일관성 있게 관리했다.
// *** 개선할 수 있는 점 : report를 Set으로 변환해서 미리 중복된 신고를 줄이면 순회를 줄일 수 있어 최적화에 도움이 된다.