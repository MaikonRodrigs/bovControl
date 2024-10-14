import React from 'react'
import Dashboard from '@/pages/dashboard'
import Template from '@/components/custom/template'
import 'leaflet/dist/leaflet.css'
import LoadingComponent from '@/components/base/loading'
import { ChakraProvider } from '@chakra-ui/react'

export default function Home() {
  return (
    <Template>
      <LoadingComponent />
      <ChakraProvider>
        <Dashboard />
      </ChakraProvider>
    </Template>
  )
}
