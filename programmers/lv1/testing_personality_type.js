function solution(survey, choices) {
  const type = ['RT', 'CF', 'JM', 'AN'];
  const types = { 'R': 0, 'T': 0, 'C': 0, 'F': 0, 'J': 0, 'M': 0, 'A': 0, 'N': 0 }  
  
  survey.forEach(([disAree, agree], idx) => {
    const choice = choices[idx];
    const score = Math.abs(choice - 4);
    types[choice <= 4 ? disAree : agree] += score;
  })
  
  const answer = type.map(([notAgree, agree]) => {
    return types[notAgree] >= types[agree] ? notAgree : agree;
  }).join('');
  
  return answer;
}