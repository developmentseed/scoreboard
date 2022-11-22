import React from 'react'
import { CSVLink } from 'react-csv'
import { formatDecimal } from '../lib/utils/format'

export default function CSVExport ({ filename, data }) {
  const isUser = data[0].campaignCount > 0
  const isTimeseries = data[0].hasOwnProperty('bin_start')
  let totalData = data
  let headers = [
    { label: 'Name', key: 'name' },
    { label: 'Roads (Km) Added', key: 'km_roads_add' },
    { label: 'Roads (Km) Modified', key: 'km_roads_mod' },
    { label: 'Buildings Added', key: 'buildings_add' },
    { label: 'Buildings Modified', key: 'buildings_mod' },
    { label: 'Points of Interest Added', key: 'poi_add' },
    { label: 'Points of Interest Modified', key: 'poi_mod' },
    { label: 'Railways (Km) Added', key: 'km_railways_add' },
    { label: 'Railways (Km) Modified', key: 'km_railways_mod' },
    { label: 'Coastlines (Km) Added', key: 'km_coastlines_add' },
    { label: 'Coastlines (Km) Modified', key: 'km_coastlines_mod' },
    { label: 'Waterways (Km) Added', key: 'km_waterways_add' },
    { label: 'Waterways (Km) Modified', key: 'km_waterways_mod' },
    { label: 'Changesets', key: 'changeset_count' },
    { label: 'Edits', key: 'edit_count' }
  ]
  if (isUser) {
    headers.splice(1, 0,
      { label: 'Campaigns', key: 'campaignCount' },
      { label: 'Badges', key: 'badgeCount' },
      { label: 'Countries', key: 'country_list.length' }
    )
  }

  if (isTimeseries) {
    headers.splice(1, 0,
      { label: 'Bin Start', key: 'bin_start' },
      { label: 'Bin End', key: 'bin_end' }
    )
  }

  // Construct footer for the campaign table export
  if (!isUser) {
    let exportTotals = {}

    let headerKeys = headers.map(e => e.key)

    headerKeys.forEach(k => {
      exportTotals[k] = isTimeseries && k.indexOf('bin') !== -1 ? '' : formatDecimal(
        data
          .map(row => Number(row[k]))
          .reduce((prev, cur) => prev + cur)
      )
    })

    // Add name column
    exportTotals['name'] = 'Total'
    totalData = [...data, exportTotals]
  }

  return (
    <CSVLink
      className='button button--secondary'
      data={totalData}
      filename={filename}
      headers={headers}
    >
      Export Data (CSV)
    </CSVLink>
  )
}
