'use client'

import { MemoryRouter } from 'react-router-dom'
import dynamic from 'next/dynamic'

const App = dynamic(() => import('../../App'), { ssr: false })

export function ClientOnly() {
  return (
    <MemoryRouter>
      <App />
    </MemoryRouter>
  )
}