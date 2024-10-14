import { MapContainer } from 'react-leaflet'
import styled from 'styled-components'
import { CloseCircleOutline } from '@styled-icons/evaicons-outline/CloseCircleOutline'

export const Container = styled(MapContainer)`
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 20;
  padding: 2px;
  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.1),
    0 6px 20px rgba(0, 0, 0, 0.1);
`
