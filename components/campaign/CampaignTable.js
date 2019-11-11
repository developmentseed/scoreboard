import React from 'react'
import { sortBy, prop } from 'ramda'
import CSVExport from '../../components/CSVExport'
import Table from '../common/Table'

const tableSchema = {
  'headers': {
    'name': { type: 'namelink', accessor: 'name' },
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
    'roads',
    'buildings',
    'poi',
    'railways',
    'coastlines',
    'waterways',
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

  return (
    <div className='widget clearfix table-wrapper'>
      <Table idMap={idMap} tableSchema={tableSchema} data={campaignTopStats} />
      <CSVExport filename={props.name} data={campaignTopStats} />
    </div>
  )
}
