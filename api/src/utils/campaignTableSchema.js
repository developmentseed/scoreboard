const osmesaUserStatSchema = {
  'headers': {
    'name': { type: 'namelink', accessor: 'name' },
    'country': { type: 'string', accessor: 'country' },
    'roads': { type: 'number', accessor: 'km_roads_add_mod' },
    'buildings': { type: 'number', accessor: 'buildings_add_mod' },
    'poi': { type: 'number', accessor: 'poi_add_mod' },
    'railways': { type: 'number', accessor: 'km_railways_add_mod' },
    'coastlines': { type: 'number', accessor: 'km_coastlines_add_mod' },
    'waterways': { type: 'number', accessor: 'km_waterways_add_mod' },
    'changesets': { type: 'number', accessor: 'changeset_count' },
    'edits': { type: 'number', accessor: 'edit_count' }
  },
  'columnOrder': [
    'name',
    'country',
    'roads',
    'buildings',
    'poi',
    'railways',
    'coastlines',
    'waterways',
    'changesets',
    'edits'
  ],
  'displaysTooltip': [
    'name',
    'buildings',
    'poi',
    'changesets',
    'edits'
  ]

}
const maprouletteChallengeSchema = {
  'headers': {
    'fixed': { type: 'number', accessor: 'fixed' },
    'alreadyFixed': { type: 'number', accessor: 'alreadyFixed' },
    'falsePositive': { type: 'number', accessor: 'falsePositive' },
    'tooHard': { type: 'number', accessor: 'tooHard' },
    'skipped': { type: 'number', accessor: 'skipped' }
  },
  columnOrder: [
    'fixed',
    'falsePositive',
    'skipped',
    'deleted',
    'alreadyFixed',
    'tooHard',
    'answered',
    'validated',
    'disabled',
    'avgTimeSpent'
  ],
  'displaysTooltip': [
    'fixed',
    'falsePositive',
    'skipped',
    'deleted',
    'alreadyFixed',
    'tooHard',
    'answered',
    'validated',
    'disabled',
    'avgTimeSpent'
  ]

}
const maprouletteUserStatSchema = {
  'headers': {
    'name': { type: 'namelink', accessor: 'name' },
    'rank': { type: 'number', accessor: 'rank' },
    'score': { type: 'number', accessor: 'score' },
    'avgTimeSpent': { type: 'number', accessor: 'avgTimeSpent' },
    'completedTasks': { type: 'number', accessor: 'completedTasks' }
  },
  columnOrder: [
    'rank',
    'name',
    'score',
    'avgTimeSpent',
    'completedTasks'
  ],
  'displaysTooltip': [
    'name',
    'rank',
    'score',
    'avgTimeSpent',
    'completedTasks'
  ]
}

module.exports = {
  osmesaUserStatSchema,
  maprouletteUserStatSchema,
  maprouletteChallengeSchema
}
