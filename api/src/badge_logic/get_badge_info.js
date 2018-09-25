// change this to get badges from db instead
const badges = require('./badges')
/**
 * Given a metric and a key to a badge
 * calculate the level of that badge and the percentage amount
 * needed to obtain the next badge
 */
//eslint-disable-next-line no-unused-vars, consistent-return
module.exports = (metric, key, badgesDB) => {
  const { tiers, name, id } = badges[key]
  let badgeLevel = 0

  if (metric >= tiers[1] && metric < tiers[2]) {
    badgeLevel = 1
  }
  else if (metric >= tiers[2] && metric < tiers[3]) {
    badgeLevel = 2
  }
  else if (metric >= tiers[3]) {
    badgeLevel = 3
  }

  const nextBadgeLevel = badgeLevel + 1
  const currentPoints = Number(metric)
  let lastPoints = 0
  let nextPoints = 0
  let percentage = 100

  if (badgeLevel < Object.keys(tiers).length) {
    if (badgeLevel > 0) lastPoints = tiers[badgeLevel]
    nextPoints = tiers[nextBadgeLevel]
    percentage = (currentPoints - lastPoints) / (nextPoints - lastPoints) * 100
    return {
      name: name,
      category: id,
      badgeLevel,
      nextBadgeLevel,
      points: {
        currentPoints,
        nextPoints,
        percentage
      }
    }
  }
}
