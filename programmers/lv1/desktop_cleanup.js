// 바탕화면 정리

function solution(wallpaper) {
  minRow = 999
  maxRow = -999
  minCol = 999
  maxCol = -999
  
  wallpaper.forEach((type, row) => {
      for (let col = 0; col < type.length; col++) {
          if (type[col] === '#') {
              if (minRow > row) minRow = row
              if (maxRow < row) maxRow = row
              if (minCol > col) minCol = col
              if (maxCol < col) maxCol = col
          }   
      }
  })
  
  return [minRow, minCol, maxRow + 1, maxCol + 1];
}