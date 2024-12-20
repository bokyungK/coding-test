// 기사단원의 무기

function solution(number, limit, power) {
  const divisors = Array(number + 1).fill(0);
  let answer = 0;

  // 약수 개수 계산 (에라토스테네스의 체 방식)
  for (let i = 1; i <= number; i++) {
      for (let j = i; j <= number; j += i) {
          divisors[j]++; 
      }
  }

  // 약수 개수를 사용해 결과 계산
  for (let i = 1; i <= number; i++) {
      answer += divisors[i] > limit ? power : divisors[i];
  }

  return answer;
}

// 15의 약수를 구하기 위해 1부터 15까지 순회하면서 나눈 나머지 값이 0인지 확인하면 시간 초과가 발생했다.
// 복잡도를 낮출 수 있는 '약수 찾기 규칙'이 있을까?
// 인자 number(ex: 15)의 제곱근을 기준으로 제곱근 이하 값에서와 이상 값에서 약수의 개수가 대칭을 이루는 법칙을 활용하면 된다.
// 단, 약수가 대칭을 이루지 않고 하나인 경우(ex: 2 * 2 = 4)를 따로 처리해주고 그 외 경우는 정석적인 방법으로 나머지 값이 0이면 2개씩 더해주면 된다.
// number의 제곱근만큼만 수행되어 시간 복잡도가 O(number × √number)로 개선된다.

// 위 방식만으로는 number가 큰 수 일 때 아직 시간 복잡도가 높을 수 있다.
// '에라토스테네스의 체' 방식을 사용하면 시간 복잡도를 O(number×log(number))로 더욱 낮출 수 있다.
// 원리는 1부터 number까지 순회하면서 현재 숫자의 배수가 되는 인덱스 위치에 +1(카운트)을 해준다.
// 'A'라는 수가 'B'라는 수의 배수라면 'B'는 'A'의 약수이기 때문에, 현재 숫자의 배수에 해당하는 숫자들 각각을 카운트해주면 역으로 그 숫자들의 약수 개수를 구하는 것이 된다.
// 그리고 내부 for문에서 j를 더해서 배수인 구간만 찾기 때문에 1부터 number를 모두 순회하지 않는다.
