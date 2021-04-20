import React from 'react'
import { Map, TileLayer, GeoJSON } from 'react-leaflet'
import { reject, pathEq } from 'ramda'
import join from 'url-join'
import { APP_URL_PREFIX } from '../../api/src/config'
const { featureCollection } = require('@turf/helpers')

export default function HomeMap (props) {
  // Exclude map roulette features
  const features = reject(pathEq(['properties', 'tasker_type'], 'mr'), props.overlay.features)
  console.log(props.settings)

  return (
    <Map center={[30, 0]} zoom={0.5} >
      <TileLayer url={props.settings['leaflet-source']} />
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
