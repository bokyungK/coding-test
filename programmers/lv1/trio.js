// 삼총사

function solution(number) {
  let answer = 0;
  
  for (let i = 0; i < number.length; i++) {
    for (let j = i+1; j < number.length - 1; j++) {
      for (let k = j+1; k < number.length; k++) {
        if (number[i] + number[j] + number[k] === 0) {
          answer++;
        }
      }
    }
  }
  
  return answer;
}

// 배열의 값 중 순서 상관없이 3개를 추출해서 합이 0인지 체크하면 된다.
// 따라서 조합을 구하면 되므로 if문으로 i, j, k가 같은 경우를 continue 처리해주었다.
// 최종적으로 코드의 길이가 길고 복잡해져서 for문의 각 index 초기화 값이 겹치지 않게 다르게 설정하여 리팩토링 했다.