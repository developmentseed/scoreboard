import React from 'react'
import { sortBy, prop } from 'ramda'
import CSVExport from '../../components/CSVExport'
import Table from '../common/Table'
import { formatDecimal } from '../../lib/utils/format'

export default function CampaignTable (props) {
  if (props.data.length === 0) {
    return <div />
  }
  let idMap = Object.assign(...props.data.map(({ uid, name }) => ({ [name]: uid })))

  let campaignTopStats
  let campaignTotals

  if (props.type === 'osmesa') {
    campaignTopStats = sortBy(prop('edits'), props.data).reverse()
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
    campaignTotals = {}

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
  }

  return (
    <div className='widget clearfix table-wrapper'>
      <Table idMap={idMap} tableSchema={props.schema} data={campaignTopStats || props.data} totals={campaignTotals || {}} />
      <div>
        <p><em>* All roads, railways, coastlines and waterways represent Km added and modified</em></p>
        {campaignTopStats && <CSVExport filename={`${props.name}.csv`} data={campaignTopStats} />}
      </div>
    </div>
  )
}
