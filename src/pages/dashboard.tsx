'use client'
import Title from '@/components/base/title'
import Text from '@/components/base/text'
import React from 'react'
import getChecklist from '@/model/getChecklist.model'

const Dashboard: React.FC = () => {
  const [list, setList] = React.useState<getChecklist[]>([])
  async function getUser() {
    try {
      const response = await fetch('/api/getCheckList', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await response.json()
      setList(data)
    } catch (error) {
      console.error('Error fetching datasss:', error)
    }
  }

  React.useEffect(() => {
    getUser()
  }, [])

  return (
    <>
      <Title>TESTE</Title>
      {list.slice(0, 20).map((i) => {
        return <Text key={i._id}>{i._id}</Text>
      })}
    </>
  )
}

export default Dashboard
