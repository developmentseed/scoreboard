import React, { Component } from 'react'
import { Map, TileLayer, GeoJSON } from 'react-leaflet'
import { isNil } from 'ramda'
import centerOfMass from '@turf/center-of-mass'
import BlankStateMap from './BlankStateMap'

class CampaignMap extends Component {
  render () {
    if (isNil(this.props.feature) || (!this.props.feature.id && this.props.feature.type === 'Feature')) {
      return <BlankStateMap />
    }

    const center = centerOfMass(this.props.feature)

    return (
      <Map center={center.geometry.coordinates.reverse()} zoom={6} >
        <TileLayer url={this.props.settings['leaflet-source']} />
        <GeoJSON data={this.props.feature} style={() => {
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

export default CampaignMap
