// 기사단원의 무기

function solution(number, limit, power) {
    let answer = 0;

    for (let i = 1; i <= number; i++) {
        let weapon = 0

        for (let j = 1; j*j <= i; j++) {
            if (j*j === i) weapon++
            else if (i % j === 0) weapon += 2
        }

        answer += weapon > limit ? power : weapon;
    }

    return answer;
}

// 15의 약수를 구하기 위해 1부터 15까지 순회하면서 나눈 나머지 값이 0인지 확인하면 시간 초과가 발생했다.
// 복잡도를 낮출 수 있는 '약수 찾기 규칙'이 있을까?
// 인자 number(ex: 15)의 제곱근을 기준으로 제곱근 이하 값에서와 이상 값에서 약수의 개수가 대칭을 이루는 법칙을 활용하면 된다.
// 단, 약수가 대칭을 이루지 않고 하나인 경우(ex: 2 * 2 = 4)를 따로 처리해주고 그 외 경우는 정석적인 방법으로 나머지 값이 0이면 2개씩 더해주면 된다.
// number의 제곱근만큼만 수행되어 시간 복잡도를 개선할 수 있다.
