// 달리기 경주

function solution(players, callings) {
  const playerRank = {}
  
  players.forEach((player, idx) => playerRank[player] = idx)
  callings.forEach((player) => {
      const rank = playerRank[player]
      const higherRank = rank - 1
      const higherPlayer = players[higherRank]
      
      playerRank[player] = higherRank
      playerRank[higherPlayer] = rank
      players[higherRank] = player
      players[rank] = higherPlayer
  })
  
  return players
}