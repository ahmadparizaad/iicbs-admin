'use client'

import { BrowserRouter } from 'react-router-dom'
import dynamic from 'next/dynamic'

const App = dynamic(() => import('../../App'), { ssr: false })

export function ClientOnly() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}