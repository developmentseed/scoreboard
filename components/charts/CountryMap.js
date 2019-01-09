import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoiZGV2c2VlZCIsImEiOiJnUi1mbkVvIn0.018aLhX0Mb0tdtaT2QNe2Q'

class CountryMap extends Component {
  componentDidMount () {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/devseed/cjqpb3z440t302smfnewsl6vb',
      zoom: 1,
      center: this.props.centroid,
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
          'fill-color': '#5657C2',
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
