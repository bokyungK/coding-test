// 예산

function solution(d, budget) {
  let addedAmount = 0;
  let answer = d.length;

  d.sort((a, b) => a - b);

  for (const [idx, amount] of d.entries()) {
    addedAmount += amount;

  if (addedAmount > budget) {
      answer = idx;
      break;
    }
  }

  return answer;
}

// 5번 라인에서 d.length 값을 초기화해줘야 d의 마지막 원소까지 더해도 budget을 초과하지 않는 경우 예외처리가 가능해짐
// entires 메서드를 사용하면 for of 문에서 배열의 인덱스 값을 사용할 수 있음 (단, 배열이 자주 수정되는 경우 사용을 권장하지 않음)
// for of 문을 선택한 이유는 reduce, forEach를 사용하게 되면 해당 반복문에서 O(n)만큼 시간복잡도를 갖기 때문
  // for of를 사용하면 budget을 초과했을 때 바로 break를 사용할 수 있음
  // 최악의 상황에서만 O(n)만큼 복잡도를 갖게 됨
// 배열의 length 속성은 배열 객체의 내부 상태에 저장되므로 매우 빠르므로 이후 업데이트가 없다면 성능 저하를 유발하지 않음