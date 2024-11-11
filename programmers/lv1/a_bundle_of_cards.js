// 카드 뭉치

function solution(cards1, cards2, goal) {
  let answer = 'Yes';
  let idx_c1 = 0
  let idx_c2 = 0
  
  for (let i = 0; i < goal.length; i++) {
      if (cards1[idx_c1] === goal[i]) idx_c1++
      else if (cards2[idx_c2] === goal[i]) idx_c2++
      else {
          answer = 'No'
          break;        
      }
  }
  
  return answer;
}
