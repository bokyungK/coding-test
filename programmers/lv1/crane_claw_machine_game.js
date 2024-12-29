// 크레인 인형뽑기 게임

function solution(board, moves) {
  const n = board[0].length;
  const basket = [];
  let answer = 0;
  
  moves.forEach((num) => {
    for (let i = 0; i < n; i++) {
      const doll = board[i][num - 1];
      
      if (doll !== 0) {
        if (basket[basket.length - 1] === doll) {
          basket.pop();
          answer += 2; 
        } else {
          basket.push(doll);
        }
        
        board[i][num - 1] = 0;
        break;
      }
    }
  })
  
  return answer;
}

// basket(stack)의 마지막 원소와 doll을 비교해야 하므로 인덱싱에 유의!
  // basket.length - 1 === doll (X)
  // basket[basket.length - 1] === doll (O)
// 문제에서 2차원 배열의 각 원소는 Column이 아닌 Row!