// 비밀 지도

// 첫 번째 풀이
function solution(n, arr1, arr2) {
  let answer = [];

  for (let i = 0; i < n; i++) {
    const [val1, val2] = [arr1[i], arr2[i]];
    let [binary1, binary2] = [val1.toString(2), val2.toString(2)];
    let result = '';

    binary1 = binary1.padStart(n, '0');
    binary2 = binary2.padStart(n, '0');

    for (let j = 0; j < n; j++) {
        if (binary1[j] === '1' || binary2[j] === '1') {
            result += '#';
        } else {
            result += ' ';                
        }
    }

    answer.push(result);
  }

  return answer;
}

// 두 번째 풀이 (리팩토링)
function solution(n, arr1, arr2) {
  const answer = [];
  
  for (let i = 0; i < n; i++) {
    const bitOrNum = arr1[i] | arr2[i];
    const paddedBinary = bitOrNum.toString(2).padStart(n, '0');
    let binaryToSign = '';

    for (let j = 0; j < n; j++) {
      binaryToSign += (paddedBinary[j] === '0'? ' ' : '#');
    }
      
    answer.push(binaryToSign)
  }
  
  return answer;
}

// 비트 연산자를 사용하면 조건문을 사용하지 않아도 두 값을 or 또는 and 연산 처리해서 값을 얻을 수 있다.
  // 비트 연산자는 내부적으로 N진수를 2진수로 변환하고 처리된다.
  // 두 번째 풀이와 같이 비트 연산 후에 2진수로 변환하면 하나의 결과 값만 순회하며 기호로 바꿔줄 수 있어 코드가 훨씬 간단해진다.
// 단, 비밀지도는 정해진 행의 길이가 있으므로 패딩 처리를 통해 n미만 길이의 수를 '0'으로 채워줘야하므로 세부 조건 꼭 확인하고 풀기!