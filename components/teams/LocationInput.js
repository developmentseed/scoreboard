import { useState, useEffect } from 'react'
import { Map, TileLayer, CircleMarker } from 'react-leaflet'
import { reverse } from 'ramda'

export default function LocationInput ({
  register, unregister, name, onChange, value
}) {
  useEffect(() => {
    register({ name })
    return () => unregister(name)
  }, [name, register, unregister])

  const [ zoom, setZoom ] = useState(1)
  let newCenter = [0, 0]
  if (value) {
    newCenter = reverse(JSON.parse(value).coordinates)
  }

  return (
    <Map style={{ height: '300px' }}
      center={newCenter}
      zoom={zoom}
      onViewportChanged={({ center, zoom }) => {
        setZoom(zoom)
        const toGeojson = `{
          "type": "Point",
          "coordinates": [${center[1]},${center[0]}]
        }`
        onChange(toGeojson)
      }}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <CircleMarker center={newCenter} color='blue' radius={20} />
    </Map>
  )
}
