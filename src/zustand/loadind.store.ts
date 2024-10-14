import { create } from 'zustand'

interface LoadStoreProps {
  loadingPage: boolean
  setLoadingPage: (loadingPage: boolean) => void
}

const useLoadingStore = create<LoadStoreProps>((set) => ({
  loadingPage: false,
  setLoadingPage: (loadingPage: boolean) => set({ loadingPage }),
}))

export default useLoadingStore
