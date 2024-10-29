// 추억 점수

function solution(name, yearning, photo) {
    const answer = [];
    const nameObj = {}

    name.forEach((name, idx) => nameObj[name] = yearning[idx])
    photo.forEach((names) => {
        const sum = names.reduce((acc, cur) => acc + (nameObj[cur] || 0), 0);
        answer.push(sum)
    })

    return answer;
}

// 그리움 점수 리스트에 이름이 없는 경우가 있을 수 있음. 조건 명확하게 확인하기
// indexOf를 매번 사용하는 다른 풀이는 배열을 매번 순회해야 한다. 대신에 객체를 사용했기 때문에 name 길이가 길어지더라도 상수 복잡도를 확보해서 성능에 이점이 있다.