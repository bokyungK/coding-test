function toSeconds(time) {
  const minAndSec = time.split(':').map((time) => Number(time))
  return minAndSec[0] * 60 + minAndSec[1]
}

function addZero(time) {
  if (time < 10) return '0' + time
  return time
}

function checkOpening(current, start, end) {
  if (current >= start && current <= end) return end
  return current
}

function solution(video_len, pos, op_start, op_end, commands) {
  const { videoTime, posTime, opStartTime, opEndTime } = {
      videoTime: toSeconds(video_len),
      posTime: toSeconds(pos),
      opStartTime: toSeconds(op_start),
      opEndTime: toSeconds(op_end)
  }
  let current = posTime
  
  commands.forEach((command) => {
      current = checkOpening(current, opStartTime, opEndTime)
      const commandedTime = current + (command === 'next' ? 10 : -10)
      if (commandedTime <= 0) current = 0
      else if (commandedTime >= videoTime) current = videoTime
      else current = commandedTime
  })
  
  current = checkOpening(current, opStartTime, opEndTime)
  const min = addZero(Math.floor(current / 60))
  const sec = addZero(current % 60)
  
  return `${min}:${sec}`
}