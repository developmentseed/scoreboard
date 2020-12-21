import React, { Component } from 'react'
import { Map, TileLayer, GeoJSON } from 'react-leaflet'
import { reject, pathEq } from 'ramda'
import join from 'url-join'
import { APP_URL_PREFIX } from '../../api/src/config'
const { featureCollection } = require('@turf/helpers')

class HomeMap extends Component {
  render () {
    // Exclude map roulette features
    const features = reject(pathEq(['properties', 'tasker_type'], 'mr'), this.props.overlay.features)
    return (
      <Map center={[30, 0]} zoom={0.5} >
        <TileLayer url='https://api.mapbox.com/styles/v1/devseed/cjqpb3z440t302smfnewsl6vb/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZGV2c2VlZCIsImEiOiJnUi1mbkVvIn0.018aLhX0Mb0tdtaT2QNe2Q' />
        <GeoJSON
          onEachFeature={
            ({ properties }, layer) => {
              layer.bindPopup(`<Popup><a href=${join(APP_URL_PREFIX, 'campaigns', `${properties.tasker_id}-${properties.tm_id}`)}>Campaign #${properties.tm_id} - ${properties.tasker_name}</a></Popup>`)
            }
          }
          data={featureCollection(features)} style={() => {
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

export default HomeMap
