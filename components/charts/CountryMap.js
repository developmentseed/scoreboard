import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl'
import centerOfMass from '@turf/center-of-mass'

mapboxgl.accessToken = 'pk.eyJ1IjoiZGV2c2VlZCIsImEiOiJnUi1mbkVvIn0.018aLhX0Mb0tdtaT2QNe2Q'

class CountryMap extends Component {
  componentDidMount () {
    const center = centerOfMass(this.props.geography)

    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/devseed/cj9iy816wb9x02smisy4y7id3',
      zoom: 1,
      center: center.geometry.coordinates,
      interactive: this.props.interactive
    })
    this.map.on('load', () => {
      this.map.addLayer({
        'id': 'overlay',
        'type': 'fill',
        'source': {
          'type': 'geojson',
          'data': this.props.geography
        },
        'layout': {},
        'paint': {
          'fill-color': '#9E14C3',
          'fill-opacity': 0.7
        }
      })
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
