import useMapStore from '@/zustand/map.store'
import dynamic from 'next/dynamic'
import React from 'react'

const MapComponent: React.FC = () => {
  const { disabled } = useMapStore()
  const MapWithNoSsr = React.useMemo(
    () =>
      dynamic(() => import('./map'), {
        ssr: false,
      }),
    [disabled],
  )

  return <MapWithNoSsr />
}

export default MapComponent
