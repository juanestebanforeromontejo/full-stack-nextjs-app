import { serverSideFunction } from '@/utils/server-utils'
import React from 'react'

const page = () => {
  console.log("server Route Rendered")
  const result = serverSideFunction();
  return (
    <div>
      <h1 className="h1 text-gray-300">ServerpageRoutePage</h1>
      <p className="text-gray-300 text-3xl m-3">{result}</p>
    </div>
  )
}

export default page
