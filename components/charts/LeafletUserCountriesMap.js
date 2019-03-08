import React, { Component } from 'react'
import { Map, TileLayer, GeoJSON } from 'react-leaflet'

class LeafletUserExtentMap extends Component {
  render () {
    let countries = this.props.countries || []

    return (
      <Map center={[0, 0]} zoom={1} >
        <TileLayer url='https://api.mapbox.com/styles/v1/devseed/cjqpb3z440t302smfnewsl6vb/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZGV2c2VlZCIsImEiOiJnUi1mbkVvIn0.018aLhX0Mb0tdtaT2QNe2Q' />
        <GeoJSON data={countries} style={(feature) => {
          return {
            color: '#4FCA9C',
            weight: 1,
            fillColor: '#4FCA9C',
            fillOpacity: Math.min(feature.properties.count, 100) / 100 // TODO use quantile breaks
          }
        }} />
      </Map>
    )
  }
}

export default LeafletUserExtentMap
