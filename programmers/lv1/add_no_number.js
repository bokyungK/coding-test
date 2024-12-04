// 없는 숫자 더하기

function solution(numbers) {
    const sumOfNumbers = numbers.reduce((acc, cur) => acc + cur, 0);

    return 45 - sumOfNumbers;
}

// 0부터 9까지가 고정이고 모든 숫자가 겹치지 않기 때문에 있는 숫자를 합산한 뒤 0 + 1 + ... + 9에서 있는 숫자의 합을 빼주었다. (없는 숫자를 찾는 방법보다 간편)
// includes를 사용한 다른 풀이들도 있었지만 해당 방식은 매번 값의 존재 여부를 확인해야 하고, 이 경우 주어진 배열의 길이가 매우 길어지면 비효율적인 코드이다.
// 그러나 작성한 풀이법은 배열의 길이가 길어지더라도 등차수열의 합 공식을 통해 '있는 숫자의 총합'만 구하면 되고 배열을 순회하면서 합산하는 작업은 지금과 그대로이므로 성능에 큰 차이가 발생하지 않아 최적회 된 코드이다.
