import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl'
import centerOfMass from '@turf/center-of-mass'

mapboxgl.accessToken = 'pk.eyJ1IjoiZGV2c2VlZCIsImEiOiJnUi1mbkVvIn0.018aLhX0Mb0tdtaT2QNe2Q'

class CampaignMap extends Component {
  componentDidMount () {
    const center = centerOfMass(this.props.feature)

    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/devseed/cjqpb3z440t302smfnewsl6vb',
      zoom: 6,
      center: center.geometry.coordinates,
      interactive: this.props.interactive
    })

    this.map.on('load', () => {
      this.map.addLayer({
        'id': 'overlay',
        'type': 'fill',
        'source': {
          'type': 'geojson',
          'data': this.props.feature
        },
        'layout': {},
        'paint': {
          'fill-color': '#4FCA9C',
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

    return <div style={style} ref={el => { this.mapContainer = el }} />
  }
}

export default CampaignMap
