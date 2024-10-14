'use client'

import { TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'
import React from 'react'
import L, { LatLngTuple } from 'leaflet'
import * as S from './styles'
import useMapStore from '@/zustand/map.store'

interface MapComponentProps {}

const MapComponent: React.FC<MapComponentProps> = ({}: MapComponentProps) => {
  const [isClient, setIsClient] = React.useState<boolean>(false)
  const { setMarker, marker, setView, clearMarker, disabled } = useMapStore()

  const position: LatLngTuple = [-23.590321, -46.688649]

  React.useEffect(() => {
    setIsClient(true)

    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      shadowUrl:
        'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    })
  }, [])

  if (!isClient) return null

  const MapClickHandler = () => {
    useMapEvents({
      click(e) {
        setMarker([e.latlng.lat, e.latlng.lng])
      },
    })
    return null
  }

  return (
    <>
      <S.Container
        center={marker ? marker : position}
        zoom={10}
        dragging={!disabled}
        touchZoom={!disabled}
        scrollWheelZoom={!disabled} // Desativa o zoom com roda do mouse
        doubleClickZoom={!disabled} // Desativa o zoom com duplo clique
        fadeAnimation
      >
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {!disabled && <MapClickHandler />}
        {marker && (
          <Marker position={marker}>
            <Popup>Você clicou aqui!</Popup>
          </Marker>
        )}
      </S.Container>
    </>
  )
}

export default MapComponent
