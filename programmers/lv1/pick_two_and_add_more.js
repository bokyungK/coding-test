// 두 개 뽑아서 더하기

function solution(numbers) {
  const answer = new Set();
  
  numbers.forEach((first, firstIdx) => {
      numbers.forEach((second, secondIdx) => {
          if (firstIdx !== secondIdx) {
              answer.add(first + second);
          }
      })
  })
  
  return [...answer].sort((a, b) => a - b);
}
