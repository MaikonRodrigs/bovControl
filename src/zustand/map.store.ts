import getChecklist from '@/model/getChecklist.model'
import { LatLngTuple } from 'leaflet'

import { create } from 'zustand'

interface useMapStoreProps {
  currentFarmer: getChecklist | null
  setCurrentFarmer: (currentFarmer: getChecklist) => void

  disabled: boolean
  setDisabled: (disabled: boolean) => void

  view: boolean
  setView: (view: boolean) => void

  add: boolean
  setAdd: (add: boolean) => void

  marker: LatLngTuple | null
  setMarker: (marker: LatLngTuple) => void

  clearMarker: () => void
}

const useMapStore = create<useMapStoreProps>((set) => ({
  currentFarmer: null,
  setCurrentFarmer: (currentFarmer: getChecklist) => set({ currentFarmer }),

  disabled: true,
  setDisabled: (disabled: boolean) => set({ disabled }),

  view: false,
  setView: (view: boolean) => set({ view }),

  add: false,
  setAdd: (add: boolean) => set({ add }),

  marker: null,
  setMarker: (marker: LatLngTuple) => set({ marker }),

  clearMarker: () => set({ marker: null }),
}))

export default useMapStore
