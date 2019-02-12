import React, { Component } from 'react'
import 'ol/ol.css'
import { Map, View } from 'ol'
import olms from 'ol-mapbox-style'

const mapboxUrl = 'https://api.mapbox.com/styles/v1/devseed/cjqpb3z440t302smfnewsl6vb?access_token=pk.eyJ1IjoiZGV2c2VlZCIsImEiOiJnUi1mbkVvIn0.018aLhX0Mb0tdtaT2QNe2Q'

class UserExtentMap extends Component {
  constructor (props) {
    super(props)
    this.state = { loading: true }
  }

  componentDidMount () {
    if (this.props.extent && this.state.loading) {
      this.loadMap()
      this.setState({ loading: false })
    }
  }

  componentDidUpdate () {
    if (this.props.extent && this.state.loading) {
      this.loadMap()
      this.setState({ loading: false })
    }
  }

  loadMap () {
    const { uid } = this.props
    this.map = new Map({
      target: this.mapContainer,
      view: new View({
        center: [0, 0],
        zoom: 1
      })
    })
    olms(this.map, mapboxUrl)
  }

  componentWillUnmount () {
    this.map = null
  }

  render () {
    const style = {
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: '100%'
    }

    let map = <div>Extent map unavailable</div>
    const { extent, uid } = this.props
    if (uid && extent) {
      map = <div style={style} ref={el => { this.mapContainer = el }} />
    }
    return (
      <div>
        <h4 className='header--small header--with-description-lg'>Extent of Edits</h4>
        <div style={{ position: 'relative', height: '350px' }}>
          {map}
        </div>
      </div>
    )
  }
}

export default UserExtentMap
