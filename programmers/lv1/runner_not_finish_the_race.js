// 완주하지 못한 선수

function solution(participant, completion) {
  const finishers = new Map();
  let answer = '';
  
  completion.forEach((playerName) => {
      const playerCnt = finishers.get(playerName);

      finishers.set(playerName, playerCnt ? playerCnt + 1 : 1)
  })
  
  for (const player of participant) {
      const playerCnt = finishers.get(player);
      
      if (playerCnt) {
          finishers.set(player, playerCnt - 1);
      } else {
          answer = player;
          break;
      }
  }
  
  return answer;
}

// 7 라인
  // 유사한 풀이중에 hash를 만들어주는 반복문 안에서 동시에 participant 값은 더하고 completion 값은 빼주면서 player 인원 수를 관리한 코드가 있었다.
  // 그 경우 두 번째 for문에서 0보다 큰 이름만 추출해주면 돼서 코드가 깔끔해지는 장점이 있었으나, 참가자의 수를 세는 로직과 완주한 유저의 수를 빼는 로직을 따로 분리해주는게 의미적으로 더 좋지 않을까 고민되었다.
  // 복잡도의 차이가 없기 때문에 이런 부분은 팀의 성향에 따라 맞춰서 작성하면 된다.

// 13 라인
  // idx가 필요 없기 때문에 이 코드에서는 for문이 아닌 for of문을 사용하는 것이 더 가독성이 좋다.
  // 해당하지 않는 딱 한 명의 유저만 찾으면 반복문을 종료해도 되기 때문에 forEach, filter 보다는 return문을 사용할 수 있는 for문을 사용하는 것이 성능에 도움이 된다고 판단!

// 19 - 20, 24 라인
  // return문을 함수 마지막 줄에 두고 answer 변수를 사용하는 것이 좋을까, answer 변수와 break문을 사용하지 않고 19번 라인에서 바로 player를 return하는게 좋을까?
  // 함수가 얼마나 복잡하느냐 또는 협업할 팀의 컨벤션에 따라 유연하게 짜면 된다.