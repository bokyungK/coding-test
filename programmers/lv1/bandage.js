function solution(bandage, health, attacks) {
  const [skillTime, healPoint, addedHealPoint] = bandage;
  const maxHealth = health;
  health -= attacks[0][1]
  
  for (let i = 1; i < attacks.length; i++) {
      const [attackTime, damage] = attacks[i];
      const difference = attackTime - attacks[i - 1][0] - 1;
      const point = difference * healPoint
      const bonusPoint = Math.floor(difference / skillTime) * addedHealPoint
      health += point + bonusPoint
      if (health > maxHealth) health = maxHealth
      
      health -= damage
      if (health <= 0) return -1;
  }
      
  return health;
}
// 최대 체력은 고정값이 아니라 테스트케이스마다 다른 부분 놓치지 않도록 주의