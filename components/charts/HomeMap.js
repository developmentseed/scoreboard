
import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoiZGV2c2VlZCIsImEiOiJnUi1mbkVvIn0.018aLhX0Mb0tdtaT2QNe2Q'

class CampaignMap extends Component {
  componentDidMount () {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      center: [0, 20],
      style: 'mapbox://styles/devseed/cjqpb3z440t302smfnewsl6vb',
      zoom: 0.2,
      renderWorldCopies: false,
      interactive: false
    })

    this.map.on('load', () => {
      this.map.addLayer({
        'id': 'overlay',
        'type': 'fill',
        'source': {
          'type': 'geojson',
          'data': this.props.overlay
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
      height: '100%',
      backgroundColor: 'rgb(222,234,238)'
    }

    return <div style={style} ref={el => { this.mapContainer = el }} />
  }
}

export default CampaignMap
