// 숫자 짝궁

function solution(X, Y) {
  const xArr = Array.from({length: 10}, () => 0);
  const yArr = Array.from({length: 10}, () => 0);
  let answer = '';
  
  for (let i = 0; i < X.length; i++) xArr[Number(X[i])] += 1;
  for (let i = 0; i < Y.length; i++) yArr[Number(Y[i])] += 1;
  for (let i = 9; i > -1; i--) answer += `${i}`.repeat(Math.min(xArr[i], yArr[i]));
  
  return answer ? (answer[0] === '0' ? '0' : answer) : '-1' ;
}

// 조건이 간단한 경우 if문보다 삼항연산자를 사용하는 것이 더 간결
// repeat로 최소값을 찾을 때 최소 값이 0인 경우 둘 중에 하나의 값이 없는 것 -> 이 경우 해당 값을 포함하지 않아야 하는데 repeat의 인자가 0이면 빈 문자열을 반환하기 때문에 자동으로 예외처리가 됨
// '0000'을 0으로 변환하기 위해 Number(answer) 처리를 하면 answer의 길이가 길어질수록 비효율적임. 내림차순이기 때문에 0번 인덱스만 확인해주는 것이 좋음
