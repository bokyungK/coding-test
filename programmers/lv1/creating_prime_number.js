// 소수 만들기

// 첫 번째 풀이 (조합을 구하는 로직과 소수를 구하는 로직을 따로 작업)
function solution(nums) {
  const sums = [];
  
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        sums.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }
  
  const answer = sums.filter((num) => {
    let isPrimeNum = true;
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrimeNum = false;
        break;
      }
    }
      
    return isPrimeNum;
  })
  
  return answer.length;
}

// 두 번째 풀이 (리팩토링, 소수를 구하는 코드를 함수로 정의한 뒤 조합을 구하는 즉시 바로 판별)
const getIsPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

let count = 0;

for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    for (let k = j + 1; k < nums.length; k++) {
      const sum = nums[i] + nums[j] + nums[k];

      if (getIsPrime(sum)) {
        count++
      };
    }
  }
}

return count;

// 이 문제에서는 숫자 3개의 조합을 구하면 돼서 삼중 반복문을 사용하지만, 뽑아야 하는 개수가 늘어난다고 해서 for문을 무한으로 늘릴 수 없다.
// 따라서, 재귀함수를 사용해서 조합을 구하는 로직을 활용하면 뽑을 개수에 유연하게 대응하는 코드를 작성할 수 있다.
// 에라토스테네스의 체를 사용하면 소수의 개수를 구하는 시간 복잡도를 더 낮출 수 있다.