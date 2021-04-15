import React, { Component } from 'react'
import LeafletExtentMap from './LeafletUserExtentMap'
import GLExtentMap from './UserExtentMap'

/**
 * ProgressiveExtentMap checks for WebGL context at mount,
 * if it cannot find a WebGL context, it will load a leaflet map
 */
export default class ProgressiveExtentMap extends Component {
  constructor (props) {
    super(props)

    this.state = {
      canRender: false,
      hasWebGL: false
    }
  }

  checkForWebGL () {
    try {
      var canvas = document.createElement('canvas')
      return !!(!!window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')))
    } catch (e) {
      return false
    }
  }

  componentDidMount () {
    let hasWebGL = this.checkForWebGL()
    this.setState({
      canRender: true,
      hasWebGL
    })
  }
  render () {
    if (!this.state.canRender) return <div />
    if (this.state.hasWebGL && (this.props.settings['disable-webgl'] === 'false')) return <GLExtentMap {...this.props} />
    return <LeafletExtentMap {...this.props} />
  }
}
