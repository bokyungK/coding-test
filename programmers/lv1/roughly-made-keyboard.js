// 대충 만든 자판

function solution(keymap, targets) {
  const keymap_cnts = {}

  keymap.forEach((txt) => {
      [...txt].forEach((key, idx) => {
          const press = idx + 1;
          keymap_cnts[key] = Math.min(keymap_cnts[key] || Infinity, press);
      })
  })

  const answer = targets.map((txt) => {
      let total_press = 0
      for (const key of txt) total_press += keymap_cnts[key]
      return total_press || -1
  })

  return answer;
}

// 두 값을 비교해서 할당할 때 조건문보다 Math.min 또는 max를 사용하는게 가독성이 더 좋을 수 있음
// 문자열을 순회할 때 for of를 사용하는게 일반 반복문보다 더 간결함