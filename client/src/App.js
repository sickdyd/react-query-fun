import React from 'react'
import { ReactQueryDevtools } from 'react-query-devtools'
import DataDisplay from './components/DataDisplay'

function App() {
  return (
    <>
      <ReactQueryDevtools initialIsOpen={false} />
      <DataDisplay />
    </>
  )
}

export default App
