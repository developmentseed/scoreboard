import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiZGV2c2VlZCIsImEiOiJnUi1mbkVvIn0.018aLhX0Mb0tdtaT2QNe2Q';

class UserExtentMap extends Component {
  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/devseed/cj9iy816wb9x02smisy4y7id3',
      zoom: 1,
      center: [0, 0]
    });

    /* Taken from @lossyrob's heatmap example */
    this.map.on('load', () => {
      var firstSymbolId;

      var layers = this.map.getStyle().layers;
      for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol') {
            firstSymbolId = layers[i].id;
            break;
        }
      }

      this.map.addSource('footprint', {
        type: 'vector',
        tiles: [this.props.extent]
      });

      this.map.addLayer({
        "id": "footprint-heat",
        "type": "heatmap",
        "source": "footprint",
        "source-layer": "user_footprint",
        "maxzoom": 14,
        "paint": {
          //Increase the heatmap weight based on frequency and property magnitude
          "heatmap-weight": [
            "interpolate",
            ["exponential", 1],
            ["get", "density"],
            0, 0,
            12, 1
          ]
          ,
          //Increase the heatmap color weight weight by zoom level
          //heatmap-ntensity is a multiplier on top of heatmap-weight
          "heatmap-intensity": [
            "interpolate",
            ["linear"],
            ["zoom"],
            0, 1,
            12, 3
          ],

          //Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
          //Begin color ramp at 0-stop with a 0-transparancy color
          //to create a blur-like effect.
          "heatmap-color":[
            "interpolate",
            ["linear"],
            ["heatmap-density"],
            0, "rgba(33,102,172,0)",
            0.2, "rgba(255,255,255,0)",
            0.4, "rgba(123,11,153,0)",
            0.6, "rgb(123,11,153)",
            0.8, "rgb(123,11,153)",
            1, "rgb(158,21,194)"
          ],
          //Adjust the heatmap radius by zoom level
          "heatmap-radius": [
            "interpolate",
            ["linear"],
            ["zoom"],
            0, 5,
            12, 20
          ],
          //Transition from heatmap to circle layer by zoom level
          "heatmap-opacity": [
            "interpolate",
            ["linear"],
            ["zoom"],
            7, 1,
            9, 0
          ],
        }
      }, firstSymbolId);

      this.map.addLayer({
        "id": "footprint-point",
        "type": "circle",
        "source": "footprint",
        "source-layer": "user_footprint",
        "minzoom": 7,
        "paint": {
          //Size circle raidus by earthquake magnitude and zoom level
          "circle-radius": {
            "property": "density",
            "type": "exponential",
            stops: [
              [124, 2],
              [34615, 10]
            ]
          },
          //Color circle by earthquake magnitude
          "circle-color": {
            "property": "density",
            "type": "exponential",
            "stops": [
              [0, "rgba(33,102,172,0)"],
              [2, "rgb(103,169,207)"],
              [4, "rgb(209,229,240)"],
              [6, "rgb(253,219,199)"],
              [8, "rgb(239,138,98)"],
              [10, "rgb(158,21,194)"]
            ]
          },
          "circle-stroke-color": "rgb(158,21,194)",
          "circle-stroke-width": 1,
          //Transition from heatmap to circle layer by zoom level
          "circle-opacity": {
            "stops": [
              [7, 0],
              [8, 1]
            ]
          }
        }
      }, firstSymbolId);
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    const style = {
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: '100%'
    };

    return <div style={style} ref={el => this.mapContainer = el} />;
  }
}

export default UserExtentMap;
