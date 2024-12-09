// 로또의 최고 순위와 최저 순위

function solution(lottos, win_nums) {
  const winSet = new Set(win_nums);
  const score = [6, 6, 5, 4, 3, 2, 1];
  let zeroCnt = 0;
  let sameCnt = 0;
  
  lottos.forEach((num) => {
      if (num === 0) {
          zeroCnt++;
      } else if (winSet.has(num)) {
          sameCnt++;
      }    
  })
  
  return [score[sameCnt + zeroCnt], score[sameCnt]];
}

// has로 포함 여부를 확인하는 방식이 includes 보다 복잡도가 낮다. 왜일까?
  // 1. includes -> 총 : O(n*m);
    // win_nums를 includes로 탐색하는 시간 O(m)
    // lottos 길이 n 만큼 반복
  // 2. has -> 총 : O(n+m)
    // win_nums를 Set으로 변환하는 작업 O(m)
    // win_nums를 has로 탐색하는 시간 O(1)
    // lottos 길이 n 만큼 반복
  // => Set으로 변환하는 작업을 포함하더라도 Set과 has를 사용하는 방식이 유리하다.
