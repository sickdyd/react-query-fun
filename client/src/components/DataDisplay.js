import React from 'react'
import { useQueryCache } from 'react-query'

import useData from '../hooks/useData'

export default function DataDisplay() {
  const cache = useQueryCache()
  const { status, data, error, isFetching } = useData()

  if (status === 'loading') {
    return 'Loading...'
  }

  if (status === 'error') {
    return error.message
  }

  return <div>{data.hello}</div>
}
