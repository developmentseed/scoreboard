import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl'
import bbox from '@turf/bbox'

mapboxgl.accessToken = 'pk.eyJ1IjoiZGV2c2VlZCIsImEiOiJnUi1mbkVvIn0.018aLhX0Mb0tdtaT2QNe2Q'

class CountryMap extends Component {
  componentDidMount () {
    const bounds = bbox(this.props.geography)
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/devseed/cj9iy816wb9x02smisy4y7id3',
      zoom: 1,
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
      this.map.fitBounds([[bounds[0], bounds[1]], [bounds[2], bounds[3]]], {
        padding: { top: 10, bottom: 10, left: 10, right: 10 }
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
