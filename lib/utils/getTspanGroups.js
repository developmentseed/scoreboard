/**
 * From https://github.com/plouc/nivo/issues/353#issuecomment-456163387
 * Turns labels in nivo charts to multi-line tspans
 *
 * @param {String} value Label in chart
 * @param {Number} maxLineLength Line length for label
 */
export default function getTspanGroups (value, maxLineLength) {
  const words = value.split(' ')
  const maxLines = 2

  const assembleLines = words.reduce((acc, word) => {
    if ((word + acc.currLine).length > maxLineLength && acc.currLine !== '') {
      return {
        lines: acc.lines.concat([acc.currLine]),
        currLine: word
      }
    }
    return {
      ...acc,
      currLine: acc.currLine + ' ' + word
    }
  },
  { lines: [], currLine: '' })

  const allLines = assembleLines.lines.concat([assembleLines.currLine])

  const lines = allLines.slice(0, maxLines)
  let children = []
  let dy = 0

  lines.forEach((lineText, i) => {
    children.push(
      <tspan x={0} dy={dy} key={i}>
        {
          (i === 1 && allLines.length > 2) ? lineText.slice(0, maxLineLength - 3) + '...' : lineText
        }
      </tspan>
    )
    dy += 15
  })

  return children
}
