const metricIndex = 1
const opIndex = 0
const valueIndex = 2

function mapBadgeToTask (badge, x) {
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

function execLogic (op, compValue, requiredValue, excludeFromInProgress) {
  let bp = ''
  switch (op[0]) {
    case '<':
      if (op === '<=') (bp = compValue <= requiredValue)
      else (bp = compValue < requiredValue)
      // if someone has surpassed this badge requirement, excludeFromInProgress
      excludeFromInProgress = true
      break
    case '>':
      if (op === '>=') (bp = compValue >= requiredValue)
      else bp = (compValue > requiredValue)
      break
    case '=':
      bp = (compValue === requiredValue)
      // if someone has surpassed this badge requirement, excludeFromInProgress
      if (compValue > requiredValue) excludeFromInProgress = true
      break
  }
  return [ bp, excludeFromInProgress ]
}

function betweenDates (firstValidDay, lastValidDay, days, today, excluded) {
  const lastDateSplit = lastValidDay.split('-')
  const lastValidDate = new Date(lastDateSplit[0], Number(lastDateSplit[1] - 1), lastDateSplit[2])
  const firstDateSplit = firstValidDay.split('-')
  const firstValidDate = new Date(firstDateSplit[0],
    Number(firstDateSplit[1] - 1), firstDateSplit[2])
  const pass = days.filter(
    // In this case, `requiredPointValue` will be the list [firstDate, lastDate]
    (day) => (execLogic('>=', day, firstValidDay)[0] &&
      execLogic('<=', day, lastValidDay)[0])
  ).length > 0
  if ((lastValidDate < today) || (today < firstValidDate)) {
    return [ pass, true, '' ]
  } else {
    return [ pass, excluded, mapBadgeToTask('allDays', lastValidDay) ]
  }
}

function simpleDateComp (requiredDay, days, operator, today, excluded) {
  // Check whether any days mapped are before, after, or equal to the requested date
  const pass = days.filter(
    // In this case, `requiredPointValue` will be a date in string format
    (day) => execLogic(operator, day, requiredDay)[0]
  ).length > 0
  // Only show gettable badges in progress
  const validDay = requiredDay.split('-')
  const validDate = new Date(validDay[0], Number(validDay[1] - 1), validDay[2])
  if (!(execLogic(operator, today, validDate)[0])) {
    return [ pass, true, '' ]
  } else {
    return [ pass, excluded, mapBadgeToTask('allDays', requiredDay) ]
  }
}

/**
 * Given a metricValue and a metricName to a badge
 * calculate the level of that badge and the percentage amount
 * needed to obtain the next badge
 */
// eslint-disable-next-line no-unused-vars, consistent-return
module.exports = (userMetrics, badge) => {
  const { operations } = badge
  let badgeLevel = 0

  let badgePass = true
  let badgeOperationPass = true
  let excludeFromInProgress = false
  let task = ''
  let dateTaskPhrase = ''
  let metricName = ''
  let currentPointValue = 0
  let requiredPointValue = 0
  let nextPoints = 0
  let percentage = 100
  let thisPercentage = 100

  operations.forEach((badgeOpArray) => {
    const operator = badgeOpArray[opIndex]
    metricName = badgeOpArray[metricIndex]
    currentPointValue = userMetrics[metricName]
    requiredPointValue = badgeOpArray[valueIndex]
    if (metricName === 'campaigns') {
      // Check whether any hashtags match the required one
      badgeOperationPass = currentPointValue.filter(
        // In this case, `requiredPointValue` will be the name of a hashtag
        (tag) => {
          return execLogic(operator, tag, requiredPointValue)[0]
        }
      ).length > 0
      excludeFromInProgress = true
    } else if (metricName === 'allDays') {
      const today = new Date()
      if (operator === 'between') {
        const dateRange = badgeOpArray[valueIndex].split('/');

        // the `between` operator assumes two dates in the order of [firstDate, lastDate]
        // where to earn a badge a user must have mapped on some validDay
        // where firstDate <= validDay <= lastDate
        [ badgeOperationPass, excludeFromInProgress, dateTaskPhrase ] =
          betweenDates(dateRange[0], dateRange[1], currentPointValue, today, excludeFromInProgress)
      } else {
        [ badgeOperationPass, excludeFromInProgress, dateTaskPhrase ] =
          simpleDateComp(requiredPointValue, currentPointValue, operator, today, excludeFromInProgress)
      }
    } else {
      [ badgeOperationPass, excludeFromInProgress ] = execLogic(operator, currentPointValue, requiredPointValue, excludeFromInProgress)
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
  } else { // if (badgeLevel === 0) {
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
      },
      badgeImage: badge.imageFile
    }
  }
  return null
}
