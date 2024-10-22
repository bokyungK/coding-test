function solution(friends, gifts) {
  const friendsObj = {}
  const friendsLen = friends.length;
  const giveArr = []
  
  friends.forEach((friend, idx) => {
      giveArr[idx] = new Array(friendsLen).fill(0);
      friendsObj[friend] = { idx, give: 0, take: 0 };
  })
  
  gifts.forEach((arr) => {
      const [giver, taker] = arr.split(' ');
      giveArr[friendsObj[giver]['idx']][friendsObj[taker]['idx']] += 1
      friendsObj[giver]['give'] += 1
      friendsObj[taker]['take'] += 1
  })
  
  let maxSum = -999

  for (let i = 0; i < friendsLen; i++) {
      let sum = 0
      
      for (let j = 0; j < friendsLen; j++) {
          if (i === j) continue
          
          const giveCnt = giveArr[i][j]
          const takeCnt = giveArr[j][i]
          
          if (giveCnt > takeCnt) sum += 1
          else if (giveCnt === takeCnt) {
              const iName = friends[i]
              const jName = friends[j]
              const iPresentIndex = friendsObj[iName]['give'] - friendsObj[iName]['take']
              const jPresentIndex = friendsObj[jName]['give'] - friendsObj[jName]['take']
              if (iPresentIndex > jPresentIndex) sum += 1
          }
      }
      if (sum > maxSum) maxSum = sum
  }
  return maxSum
}