export const badgeMetrics = [
  { label: 'New buildings mapped', value: 'buildings' },
  { label: 'Countries mapped', value: 'countries' },
  { label: 'Total days mapped', value: 'daysTotal' },
  { label: 'Days mapped in a row', value: 'daysInRow' },
  { label: 'Campaigns participated in', value: 'hashtags' },
  { label: 'Times using JOSM', value: 'josm' },
  { label: 'Points of interest mapped', value: 'pois' },
  { label: 'New roads mapped (km)', value: 'roadKms' },
  { label: 'Roads modified (km)', value: 'roadKmMods' },
  { label: 'Waterways mapped', value: 'waterways' },
  { label: 'Contributed to a certain campaign', value: 'campaigns' },
  { label: 'Dates mapped', value: 'allDays' }
]

export const badgeOperationTypes = [
  { label: 'More than', value: '>' },
  { label: 'Fewer than', value: '<' },
  { label: 'At least', value: '>=' },
  { label: 'Up to', value: '<=' }
]

export const badgeDateOperationTypes = [
  { label: 'Before', value: '<' },
  { label: 'After', value: '>' },
  { label: 'On', value: '=' },
  { label: 'Between', value: 'between' }
]

export const badgeOperationIndex = {
  operation: 0,
  metric: 1,
  value: 2,
  secondValue: 3
}

export const isDateMetric = (op) => op[1].indexOf('allDays') >= 0
