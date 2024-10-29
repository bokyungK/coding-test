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