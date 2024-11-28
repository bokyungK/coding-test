// 삼총사

function solution(number) {
  const len = number.length;
  let answer = 0;
  
  for (let i = 0; i < len-2; i++) {
    for (let j = i+1; j < len-1; j++) {
      for (let k = j+1; k < len; k++) {
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

// 계속해서 length를 계산하지 않도록 변수를 추가했고, 최상위 for문의 범위가 len-2가 되도록 수정
// 현재 시간 복잡도는 O(n³)으로 number의 길이가 길어지는 경우 성능이 좋지 못한 코드다.
// 투포인터 알고리즘을 사용하면 O(n²)으로 성능을 훨씬 개선할 수 있다.