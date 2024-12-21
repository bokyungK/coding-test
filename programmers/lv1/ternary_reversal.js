// 3진법 뒤집기

function solution(n) {
  const ternaryNum = n.toString(3);
  const reversedStr = ternaryNum.split('').reverse().join('');
  const decimalNum = parseInt(reversedStr, 3)
  
  return decimalNum;
}