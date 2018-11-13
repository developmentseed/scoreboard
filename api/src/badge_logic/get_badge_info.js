
function mapBadgeToTask (badge, x) {
  const map = {
    roadKms: `Add ${x} more km of roads`,
    roadKmMods: `Modify ${x} more km of roads`,
    buildings: `Build ${x} more buildings`,
    daysInRow: `Map ${x} more consecutive days`,
    josm: `Use JOSM to map an area ${x} more times`,
    hashtags: `Participate in ${x} more mapathons`,
    pois: `Add ${x} more nodes`,
    waterways: `Add ${x} more km of waterways`,
    countries: `Map in ${x} more different countries`,
    daysTotal: `Map ${x} more days in total`
  }
  return map[badge]
}

const metricIndex = 1
const opIndex = 0
const valueIndex = 2

/**
 * Given a metricValue and a metricName to a badge
 * calculate the level of that badge and the percentage amount
 * needed to obtain the next badge
 */
// eslint-disable-next-line no-unused-vars, consistent-return
module.exports = (userMetrics, badge) => {
  const { operations } = badge
  let badgeLevel = 0

  let opsPass = true
  let op = ''
  let task = ''
  let metricName = ''
  let currentPoints = 0
  let nextPoints = 0
  let percentage = 100
  let thisPercentage = 100
  operations.forEach((badgeOp) => {
    metricName = badgeOp[metricIndex]
    currentPoints = userMetrics[metricName]
    if (badgeOp[opIndex][0] === '<') {
      if (badgeOp[opIndex] === '<=') (op = currentPoints <= badgeOp[valueIndex])
      else (op = currentPoints < badgeOp[valueIndex])
    } else if (badgeOp[opIndex][0] === '>') {
      if (badgeOp[opIndex] === '>=') (op = currentPoints >= badgeOp[valueIndex])
      else op = (currentPoints > badgeOp[valueIndex])
    } else if (badgeOp[opIndex] === '=') {
      op = (currentPoints === badgeOp[valueIndex])
    }
    if (op === false) {
      nextPoints = badgeOp[valueIndex]
      if (task !== '') task += ' and '
      task += mapBadgeToTask(metricName, Math.floor(nextPoints - currentPoints))
      thisPercentage = (currentPoints / nextPoints) * 100
      percentage = Math.min(thisPercentage, percentage)
      opsPass = false
    }
  })
  task += '.'
  if (opsPass === true) {
    badgeLevel = 1
  } else { // if (badgeLevel === 0) {
    task = `${Math.floor(percentage)}% of the way to earning this badge. ${task}`
  }
  return {
    name: badge.name,
    category: badge.category,
    metric: metricName,
    description: badge.description,
    progress: task,
    badgeLevel,
    points: {
      percentage
    }
  }
}
