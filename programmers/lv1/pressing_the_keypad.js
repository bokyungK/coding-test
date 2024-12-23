// 키패드 누르기

function solution(numbers, hand) {
  const keypad = [[3, 1], [0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 0], [2, 1], [2, 2], [3, 0], [3, 2]];
  const handPosition = { 'left': 10, 'right': 11 }; // '*'의 좌표 인덱스, '#'의 좌표 인덱스
  let answer = '';

  numbers.forEach((num) => {
      const column = keypad[num][1];
      const { left, right } = handPosition;

      if (column === 0) {
          answer += 'L';
          handPosition['left'] = num;
      } else if (column === 2) {
          answer += 'R';
          handPosition['right'] = num;
      } else {
          const leftDiff = Math.abs(keypad[left][0] - keypad[num][0]) + Math.abs(keypad[left][1] - keypad[num][1]);
          const rightDiff = Math.abs(keypad[right][0] - keypad[num][0]) + Math.abs(keypad[right][1] - keypad[num][1]);

          if (leftDiff - rightDiff === 0) {
              answer += hand.toUpperCase().slice(0, 1);
              handPosition[hand] = num;
          } else {
              const nearHand = leftDiff - rightDiff > 0 ? 'right' : 'left';
              answer += nearHand.toUpperCase().slice(0, 1);
              handPosition[nearHand] = num;
          }
      }
  })

  return answer;
}

// 키패드 번호를 인덱스로 갖는 좌표 값을 가진 배열을 이용하여 거리 값을 계산하는 방식으로 풀이