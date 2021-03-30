import React, { Component } from 'react'
import { Map, TileLayer, GeoJSON } from 'react-leaflet'
import bbox from '@turf/bbox'

class LeafletCountryMap extends Component {
  render () {
    const bounds = bbox(this.props.geography)

    return (
      <Map bounds={[[bounds[1], bounds[0]], [bounds[3], bounds[2]]]} >
        <TileLayer url={this.props.settings['leaflet-source']} />
        <GeoJSON data={this.props.geography} style={() => {
          return {
            color: '#4FCA9C',
            weight: 1,
            fillColor: '#4FCA9C',
            fillOpacity: 0.7
          }
        }} />
      </Map>
    )
  }
}

export default LeafletCountryMap
