'use client'

import React from 'react'

import useCheckListStore from '@/zustand/checklist.store'
import DashboardView from '@/components/dashboard'
import useLoadingStore from '@/zustand/loadind.store'
import useMapStore from '@/zustand/map.store'

const Dashboard: React.FC = () => {
  const { stage, setCheckList } = useCheckListStore()
  const { setLoadingPage } = useLoadingStore()

  async function getUser() {
    setLoadingPage(true)
    try {
      const response = await fetch('/api/getCheckList', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await response.json()
      setCheckList(data)
    } catch (error) {
      console.error('Error fetching datasss:', error)
    } finally {
      setLoadingPage(false)
    }
  }

  React.useEffect(() => {
    getUser()
  }, [])

  const DashboardStages = React.useMemo(() => {
    switch (stage) {
      case 'list':
        return <DashboardView />
    }
  }, [stage])

  return DashboardStages
}

export default Dashboard
