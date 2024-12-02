// 최소 직사각형

// 첫 번째 풀이
function solution(sizes) {
  const wArr = [];
  const hArr = [];

  sizes.forEach(([w, h]) => {
      wArr.push(Math.max(w, h));
      hArr.push(Math.min(w, h));
  })
  
  return Math.max(...wArr) * Math.max(...hArr);
}

// 두 번째 풀이
function solution(sizes) {
  let maxW = 0;
  let maxH = 0;

  sizes.forEach(([w, h]) => {
      const [larger, smaller] = w > h ? [w, h] : [h, w];
      maxW = Math.max(maxW, larger);
      maxH = Math.max(maxH, smaller);
  });

  return maxW * maxH;
}

// 더 큰 값과 작은 값끼리 분류하여 비교하면 최소 크기의 만능 지갑을 구할 수 있다.
// 첫 번째 풀이와 두 번째 풀이 모두 시간 복잡도는 O(n)이지만, 공간 복잡도에서 두 번째 코드는 배열을 사용하지 않고 상수 크기의 변수만 사용하여 최적화 할 수 있다.