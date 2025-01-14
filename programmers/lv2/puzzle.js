// 퍼즐 게임 챌린지

// 첫 번째 풀이 (선형 탐색)
function solution(diffs, times, limit) {
  const max = Math.max(...diffs);
  let level = max;
  
  function getTotal(level) {
    let total = 0;
      
    diffs.forEach((diff, idx) => {
      const timeCur = times[idx];
        
      if (diff <= level) {
        total += timeCur;
      } else {
        const numberOfWrong = diff - level;
        const timeOfWrong = timeCur + (0 || times[idx - 1]);

        total += (numberOfWrong * timeOfWrong) + timeCur;
      }
    }) 
      
    return total;
  }
  
  while (getTotal(level) <= limit) {
    level--;
  }

  return level + 1;
}

// 두 번째 풀이 (이진 탐색)
function solution(diffs, times, limit) {
  const max = diffs.reduce((a, b) => Math.max(a, b), -Infinity)
  let left = 0, right = max, answer = max;
  
  const getTotal = (level) => {
    let total = 0;
    
    for (let i = 0; i < diffs.length; i++) {
      if (total > limit) {
        break;
      } else {
        const extra = diffs[i] > level ? (diffs[i] - level) * (times[i] + (0 || times[i - 1])) : 0;
        total += times[i] + extra;
      }
    }

    return total;
  };
  
  while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      
      if (getTotal(mid) <= limit) {
        answer = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
  }

  return answer;
}

// 처음에 생각한 풀이 방법
  // 총 시간을 계산하는 방법은 이미 문제에 나와있다.
  // 내가 구해야 할 값은 총 시간을 구하는 공식의 결과가 limit을 넘지 않는 '최소 level'을 찾는 것이다.
  // 그렇다면 해당 공식을 함수로 만들어 놓고, level 값을 파라미터로 전달하면서 반환된 결과와 limit을 비교하면 된다. (level은 diffs의 최대값으로 초기화되어 순회를 통해 1씩 감소하면서 최적의 값을 찾게 됨)
  // 하지만 고민되는 부분은 diffs가 가능한 최대 길이가 100,000이므로 완전 탐색으로 찾으면 100% 시간 초과가 발생할 것이다.

// 첫 번째 풀이
  // 일단 첫 번째 풀이로 구현해보고 시간 단축을 할 수 있는 부분을 분석해보았다.
  // 배열이 매우 긴 테스트 케이스 외에는 모두 성공했다.
  // 그렇다면 완전 탐색을 하지 않고 전체 탐색할 구간을 절반으로 나눠서, limit보다 크면 그 하위 구간을 탐색하고 작으면 상위 구간을 탐색하면서 계속 반복하면 순회를 줄일 수 있지 않을까?
  // 이진 탐색을 이용해보면 될 것 같다!

// 두 번째 풀이
  // 이진 탐색을 통해 시간 복잡도가 O(n x max)에서 O(N x log(max))로 감소했다.
  // Math.max를 사용하기 위해서 전개 연산자를 사용하는 경우 배열의 길이가 일정 길이를 넘어서면 런타임 에러가 발생할 수 있다.
    // 이 문제에서도 일부 테스트 케이스에서 해당 문제가 발생했다.
    // 36번 라인에서 max 값을 구하는 방식을 reduce로 바꿔서 정상적으로 통과했다. (시간 복잡도는 동일하나 전개 연산자로 전달되는 값의 개수에 관련된 이슈)
