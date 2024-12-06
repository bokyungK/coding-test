// 숫자 문자열과 영단어

function solution(s) {
  const words = {
      zero: '0',
      one: '1',
      two: '2',
      three: '3',
      four: '4',
      five: '5',
      six: '6',
      seven: '7',
      eight: '8',
      nine: '9',
  }
  let word = '';
  let answer = '';
  
  for (const char of s) {
      if (isNaN(char)) {
          word += char;
          
          if (word in words) {
              answer += words[word];
              word = '';
          }
      } else {
          answer += char;
      }
  }
  
  return Number(answer);
}

