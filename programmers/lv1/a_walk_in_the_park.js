// 공원 산책

function solution(park, routes) {
  const w = park[0].length
  const h = park.length;
  let x = park.findIndex(row => row.includes('S'))
  let y = park[x].indexOf('S')
  const compass = { 'E': [0, 1], 'W': [0, -1], 'S': [1, 0], 'N': [-1, 0], }
  
  routes.map((route) => {
      const [dir, distance] = route.split(' ');
      const dist = Number(distance)
      const [dx, dy] = compass[dir];
      let isMovable = true;
  
      for (let i = 1; i <= dist; i++) {
        const nx = x + dx * i
        const ny = y + dy * i
        
        if (nx <= -1 || nx >= h || ny <= -1 || ny >= w || park[nx][ny] === 'X') {
            isMovable = false;
            break;
        }
      } 
      
      if (isMovable === true) {
          x += dx * dist
          y += dy * dist
      }
  })
  
  return [x, y];
}