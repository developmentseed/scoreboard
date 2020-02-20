import { useState } from 'react'
import { Map, TileLayer, CircleMarker } from 'react-leaflet'

export default function LocationInput ({ value, onChange }) {
  const [ zoom, setZoom ] = useState(1)

  return (
    <Map style={{ height: '300px' }}
      center={value}
      zoom={zoom}
      onViewportChanged={({ center, zoom }) => {
        setZoom(zoom)
        onChange(center)
      }}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <CircleMarker center={value} color='blue' radius={20} />
    </Map>
  )
}
