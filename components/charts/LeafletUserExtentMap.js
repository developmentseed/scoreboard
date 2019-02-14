import React, { Component } from 'react'
import { Map, TileLayer, withLeaflet } from 'react-leaflet'
import VectorGridDefault from 'react-leaflet-vectorgrid'
const VectorGrid = withLeaflet(VectorGridDefault)

const isDev = process.env.NODE_ENV === 'development'

class LeafletUserExtentMap extends Component {
  render () {
    let vectorTileLayerStyles = {}
    let styleFunc = () => {
      return ({
        radius: 1,
        color: '#5657C2',
        opacity: 0.5
      })
    }
    if (isDev) {
      vectorTileLayerStyles['earthquakes'] = styleFunc
    } else {
      vectorTileLayerStyles[this.props.uid] = styleFunc
    }

    const options = {
      type: 'protobuf',
      url: this.props.extent,
      subdomains: '',
      zIndex: 400,
      vectorTileLayerStyles
    }

    return (
      <Map center={[0, 0]} zoom={1} >
        <TileLayer url='https://api.mapbox.com/styles/v1/devseed/cjqpb3z440t302smfnewsl6vb/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZGV2c2VlZCIsImEiOiJnUi1mbkVvIn0.018aLhX0Mb0tdtaT2QNe2Q' />
        <VectorGrid {...options} />
      </Map>
    )
  }
}

export default LeafletUserExtentMap
