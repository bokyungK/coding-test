// 햄버거 만들기

// 첫 번째 풀이
function solution(ingredient) {
  const stack = [];    
  let answer = 0;
  
  ingredient.forEach((item) => {
      stack.push(item)
      const len = stack.length;
      
      if (
          stack[len - 1] === 1 &&
          stack[len - 2] === 3 &&
          stack[len - 3] === 2 &&
          stack[len - 4] === 1   
      ) {
          for (let i = 0; i < 4; i++) {
              stack.pop();
          }
          answer++   
      }
  })

  return answer;
}

// 두 번째 풀이
function solution(ingredient) {
  const pattern = [1, 2, 3, 1]
  const stack = [];
  let answer = 0;
  
  ingredient.forEach((item) => {
      stack.push(item)
      const len = stack.length;
      
      if (pattern.every((val, idx) => stack[len - 4 + idx] === val)) {
          stack.splice(-4, 4);
          answer++   
      }
  })

  return answer;
}

// 처음 문제를 보고 뒤에서부터 버거를 먼저 쌓으면 앞에 버거도 쌓을 수 있는 경우가 있어서 헷갈렸다. 하지만 문제에서 조건으로 '무조건 앞에서부터 순서대로 쌓아야된다'고 명시되어 있음!
// 스택의 4개 구간을 매번 if로 처리 하지 않기 위해 조건문 안에서 && 연산을 통해 처리
// 성능은 첫 번째 풀이가 조건문 처리에서 미세하게 더 빠르지만(stack 배열만 조회하기 때문에), 두 번째 풀이는 유지보수성 및 확장성에 더 이점이 있음.
// 이 문제에서는 pattern의 길이가 4로 제한되어 있고 짧기 때문에 상황에 따라 추구하는 코드 스타일로 풀이하면 됨!
// every 메서드는 해당하는 배열의 모든 원소들이 조건을 통과하는지 테스트할 수 있다. 이 문제처럼 stack의 원소 위치에 따라 비교할 값이 달라지는 경우 사용하기 유용!