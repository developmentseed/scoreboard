import React from 'react'
import { sortBy, prop } from 'ramda'
import CSVExport from '../../components/CSVExport'
import Table from '../common/Table'
import { formatDecimal } from '../../lib/utils/format'

const tableSchema = {
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

export default function CampaignTable (props) {
  if (props.users.length === 0) {
    return <div />
  }
  let idMap = Object.assign(...props.users.map(({ uid, name }) => ({ [name]: uid })))

  const campaignTopStats = sortBy(prop('edits'), props.users).reverse()
    .map(user => ({
      ...user,
      km_roads_add_mod: user.km_roads_add + user.km_roads_mod,
      buildings_add_mod: user.buildings_add + user.buildings_mod,
      poi_add_mod: user.poi_add + user.poi_mod,
      km_railways_add_mod: user.km_railways_add + user.km_railways_mod,
      km_coastlines_add_mod: user.km_coastlines_add + user.km_coastlines_mod,
      km_waterways_add_mod: user.km_waterways_add + user.km_waterways_mod
    }))

  // Construct footer for the campaign table
  let campaignTotals = {}

  let keys = [
    'km_roads_add_mod',
    'buildings_add_mod',
    'poi_add_mod',
    'km_railways_add_mod',
    'km_coastlines_add_mod',
    'km_waterways_add_mod',
    'changeset_count',
    'edit_count'
  ]

  keys.forEach(k => {
    campaignTotals[k] = formatDecimal(
      campaignTopStats
        .map(row => Number(row[k]))
        .reduce((prev, cur) => prev + cur)
    )
  })

  // Add name column
  campaignTotals['name'] = 'Total'

  return (
    <div className='widget clearfix table-wrapper'>
      <Table idMap={idMap} tableSchema={tableSchema} data={campaignTopStats} totals={campaignTotals} initialSortColumn='edit_count' />
      <div>
        <p><em>* All roads, railways, coastlines and waterways represent Km added and modified</em></p>
        <CSVExport filename={props.name} data={campaignTopStats} />
      </div>
    </div>
  )
}
