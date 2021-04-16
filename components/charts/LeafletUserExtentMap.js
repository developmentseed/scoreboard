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
      vectorTileLayerStyles['__sequences__'] = () => ({ opacity: 0 })
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
        <TileLayer url={this.props.settings['leaflet-source']} />
        <VectorGrid {...options} />
      </Map>
    )
  }
}

export default LeafletUserExtentMap
