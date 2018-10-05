
function mapBadgeToTask(badge, x) {
  const map = {
    roadKms: `Add ${x} more km of roads.`,
    roadKmMods: `Modify ${x} more km of roads.`,
    buildings: `Build ${x} more buildings.`,
    daysInRow: `Map ${x} more consecutive days.`,
    josm: `Use JOSM to map an area ${x} more times.`,
    hashtags: `Participate in ${x} more mapathons.`,
    pois: `Add ${x} more nodes.`,
    waterways: `Add ${x} more km of waterways.`,
    countries: `Map in ${x} more different countries.`,
    daysTotal: `Map ${x} more days in total.`
  }
  return map[badge]
}

/**
 * Given a metricValue and a metricName to a badge
 * calculate the level of that badge and the percentage amount
 * needed to obtain the next badge
 */
//eslint-disable-next-line no-unused-vars, consistent-return
module.exports = (metricValue, metricName, badge) => {
  const { tiers, name, id } = badge
  let badgeLevel = 0
  const threshold = tiers[2]

  // try out level-less system using just the largest threshold
  if (metricValue >= threshold) {
    badgeLevel = 1
  }
  //  const nextBadgeLevel = badgeLevel + 1
  const currentPoints = Number(metricValue)
  let nextPoints = 0
  let percentage = 100

  let task = ''

  if (badgeLevel === 0) { //Object.keys(tiers).length) {
    nextPoints = threshold
    percentage = (currentPoints / nextPoints) * 100
    task = `${Math.floor(percentage)}% of the way to earning this badge. 
      ${mapBadgeToTask(metricName, Math.floor(nextPoints - currentPoints))}`
  }
  return {
    name: name,
    category: id,
    metric: metricName,
    description: badge.description,
    progress: task,
    badgeLevel,
    points: {
      currentPoints,
      nextPoints,
      percentage
    }
  }
}
