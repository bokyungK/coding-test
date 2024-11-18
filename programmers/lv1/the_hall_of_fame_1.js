// 명예의 전당

function solution(k, score) {
  const slicedScore = [];
  const answer = score.map((num, idx) => {
      if (idx < k) {
          slicedScore.push(num)
      } else if (num > slicedScore[0]) {
          slicedScore.shift();
          slicedScore.push(num);
      }
      
      slicedScore.sort((a, b) => a - b)
      return slicedScore[0]
  })
  
  return answer;
}

// indexOf와 Math.min 조합보다 sort만 수행해서 0번 인덱스(최소값)를 사용하는 것이 약간의 복잡도를 낮출 수 있다.
// Math.min()의 복잡도는 O(k)로 sort()의 O(K log K)보다 좋지만, 전자는 추가적으로 k만큼 indexOf를 수행하기 때문에 오히려 매번 정렬을 수행하는 방식이 더 좋다.