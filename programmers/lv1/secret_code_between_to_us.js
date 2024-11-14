// 둘만의 암호

function solution(s, skip, index) {
  let answer = ''
  const skip_set = new Set(skip)
  
  for (const alphabet of s) {
      let ascii = alphabet.charCodeAt();
      let steps = 0
      
      while (steps < index) {
          ascii = ascii + 1 > 122 ? 97 : ascii + 1;
          if (!skip_set.has(String.fromCharCode(ascii))) steps++
      }
      answer += String.fromCharCode(ascii);
  }
  
  return answer;
}

// 일반 문자열을 includes로 찾게 되면 문자열의 길이만큼 O(n)의 복잡도를 갖는다.
// 위 방식은 문자열이 길어질수록 비효율적이므로 set으로 변환하여 has를 사용하면 조회 속도가 O(1)까지 개선된다.
// 불필요한 변수 사용을 줄이기 위해 계속 더해지는 값을 굳이 여러 변수로 분리하지 않고, 초기 값을 상위 스코프로 빼서 계속 더해주면 된다.