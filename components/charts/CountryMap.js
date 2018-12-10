import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl'
import centerOfMass from '@turf/center-of-mass'

mapboxgl.accessToken = 'pk.eyJ1IjoiZGV2c2VlZCIsImEiOiJnUi1mbkVvIn0.018aLhX0Mb0tdtaT2QNe2Q'

class CountryMap extends Component {
  componentDidMount () {
    const geometry = "{\"type\":\"MultiPolygon\",\"coordinates\":[[[[-85.9158325195312,30.2566947984804],[-85.3060913085938,30.8715828219575],[-84.9545288085938,31.2762034544582],[-83.9218139648437,30.7347535667351],[-83.7680053710938,29.9953810335682],[-84.1415405273438,30.0999895153779],[-84.3228149414062,30.0001383605807],[-84.3392944335938,29.9192328048422],[-85.0973510742187,29.6188334489878],[-85.3390502929687,29.6522556071219],[-85.3445434570312,29.8334963837432],[-85.7015991210938,30.1047418203182],[-85.9158325195312,30.2566947984804]]]]}"
    const center = centerOfMass(JSON.parse(geometry))
    console.log('center: ', center)

    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/devseed/cj9iy816wb9x02smisy4y7id3',
      zoom: 1,
      center: [-98.35, 39.50],
      interactive: this.props.interactive
    })
    this.map.on('load', () => {
      var firstSymbolId
      var layers = this.map.getStyle().layers
      for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol') {
          firstSymbolId = layers[i].id
          break
        }
      }
      /*
      this.map.addLayer({
        'id': 'overlay',
        'type': 'fill',
        'source': {
          'type': 'geojson',
          'data': this.props.feature
        },
        'layout': {},
        'paint': {
          'fill-color': '#9E14C3',
          'fill-opacity': 0.7
        }
      })
      */
    })
  }

  componentWillUnmount () {
    this.map.remove()
  }

  render () {
    const style = {
      textAlign: 'left',
      height: '100%'
    }
    /*
    const style = {
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: '100%'
    */

    return <div style={style} ref={el => { this.mapContainer = el }} />
  }
}

export default CountryMap
