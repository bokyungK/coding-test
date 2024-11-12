// 개인정보 수집 유효기간

function solution(today, terms, privacies) {
  const answer = [];
  const terms_period = {}
  const today_time = new Date(today.replace(/\./g, "-"));
  const today_utc = today_time.getTime();

  terms.forEach((txt) => {
      const [type, period] = txt.split(' ')
      terms_period[type] = Number(period)
  })
  
  privacies.forEach((txt, idx) => {
      const [start, type] = txt.split(' ');
      const start_time = new Date(start.replace(/\./g, "-"));
      start_time.setMonth(start_time.getMonth() + terms_period[type]);
      const end_utc = start_time.getTime();
      
      if (end_utc <= today_utc) answer.push(idx + 1)
  })
  
  return answer;
}

// 타임스탬프를 이용해서 시간을 비교
// 순서가 1부터 시작하기 때문에 인덱스 + 1 처리해주는 것 주의