
const metricIndex = 1
const opIndex = 0
const valueIndex = 2

function mapBadgeToTask(badge, x) {
  const map = {
    roadKms: `Add ${x} more km of roads`,
    roadKmMods: `Modify ${x} more km of roads`,
    buildings: `Build ${x} more buildings`,
    daysInRow: `Map ${x} more consecutive days`,
    josm: `Use JOSM to map an area ${x} more times`,
    hashtags: `Participate in ${x} more campaigns`,
    pois: `Add ${x} more nodes`,
    waterways: `Add ${x} more km of waterways`,
    countries: `Map in ${x} more different countries`,
    daysTotal: `Map ${x} more days in total`,
    allDays: `Map before ${x}`
  }
  return map[badge]
}

function execLogic(op, compValue, requiredValue) {
  let bp = ''
  if (op[0] === '<') {
    if (op === '<=') (bp = compValue <= requiredValue)
    else (bp = compValue < requiredValue)
  }
  else if (op[0] === '>') {
    if (op === '>=') (bp = compValue >= requiredValue)
    else bp = (compValue > requiredValue)
  }
  else if (op === '=') {
    bp = (compValue === requiredValue)
  }
  return bp
}

/**
 * Given a metricValue and a metricName to a badge
 * calculate the level of that badge and the percentage amount
 * needed to obtain the next badge
 */
//eslint-disable-next-line no-unused-vars, consistent-return
module.exports = (userMetrics, badge) => {
  const { operations } = badge
  let badgeLevel = 0

  let badgePass = true
  let badgeOperationPass = true
  let excludeFromInProgress = false
  let task = ''
  let metricName = ''
  let currentPointValue = 0
  let requiredPointValue = 0
  let nextPoints = 0
  let percentage = 100
  let thisPercentage = 100
  let firstValidDay = ''
  let firstValidDate = ''
  let lastValidDay = ''
  let lastValidDate = ''
  let lastDateSplit = ''
  let firstDateSplit = ''
  let validDate = ''
  let validDay = ''
  let dateTaskPhrase = ''
  operations.forEach((badgeOpArray) => {
    const operator = badgeOpArray[opIndex]
    metricName = badgeOpArray[metricIndex]
    currentPointValue = userMetrics[metricName]
    requiredPointValue = badgeOpArray[valueIndex]
    if (metricName === 'campaigns') {
      // Check whether any hashtags match the required one
      badgeOperationPass = userMetrics[metricName].filter(
        // In this case, `requiredPointValue` will be the name of a hashtag
        (tag) => execLogic(operator, tag, requiredPointValue)
      ).length > 0
      excludeFromInProgress = true
    }
    else if (metricName === 'allDays') {
      const today = new Date()
      if (operator === 'between') {
        // the `between` operator assumes two dates in the order of [firstDate, lastDate]
        // where to earn a badge a user must have mapped on some validDay
        // where firstDate <= validDay <= lastDate
        firstValidDay = badgeOpArray[valueIndex]
        lastValidDay = badgeOpArray[valueIndex + 1]
        badgeOperationPass = userMetrics[metricName].filter(
          // In this case, `requiredPointValue` will be the list [firstDate, lastDate]
          (day) => (execLogic('>=', day, firstValidDay)
            && execLogic('<=', day, lastValidDay))
        ).length > 0
        lastDateSplit = lastValidDay.split('-')
        lastValidDate = new Date(lastDateSplit[0], Number(lastDateSplit[1] - 1), lastDateSplit[2])
        firstDateSplit = firstValidDay.split('-')
        firstValidDate = new Date(firstDateSplit[0],
          Number(firstDateSplit[1] - 1), firstDateSplit[2])
        /* eslint-disable brace-style */
        if (lastValidDate < today) { excludeFromInProgress = true }
        else if (today < firstValidDate) { excludeFromInProgress = true }
        else {
          dateTaskPhrase = mapBadgeToTask('allDays', lastValidDay)
        }
      }
      else {
        // Check whether any days mapped are before, after, or equal to the requested date
        badgeOperationPass = userMetrics[metricName].filter(
          // In this case, `requiredPointValue` will be a date in string format
          (day) => execLogic(operator, day, requiredPointValue)
        ).length > 0
        // Only show gettable badges in progress
        validDay = requiredPointValue.split('-')
        validDate = new Date(validDay[0], Number(validDay[1] - 1), validDay[2])
        if (!(execLogic(operator, today, validDate))) {
          excludeFromInProgress = true
        }
        else if (operator[0] === '<') {
          dateTaskPhrase = mapBadgeToTask('allDays', requiredPointValue)
        }
      }
    }
    else {
      badgeOperationPass = execLogic(operator, currentPointValue, requiredPointValue)
    }
    if (badgeOperationPass === false) {
      nextPoints = badgeOpArray[valueIndex]
      if (task !== '') task += ' and '
      if (metricName !== 'allDays') {
        task += mapBadgeToTask(metricName, Math.floor(nextPoints - currentPointValue))
        thisPercentage = (currentPointValue / nextPoints) * 100
        percentage = Math.min(thisPercentage, percentage)
      }
      badgePass = false
    }
    if (metricName === 'allDays') {
      if (task !== '') task += ' and '
      task += dateTaskPhrase
    }
  })
  task += '.'
  if (badgePass === true) {
    badgeLevel = 1
  }
  else { //if (badgeLevel === 0) {
    if (percentage === 100) { percentage = 0 } // Simple unearned date badges will show 0 progress
    task = `${Math.floor(percentage)}% of the way to earning this badge. ${task}`
  }
  if (badgePass === true || !(excludeFromInProgress)) {
    return {
      name: badge.name,
      category: badge.category,
      description: badge.description,
      progress: task,
      badgeLevel,
      points: {
        percentage
      }
    }
  }
  return null
}
