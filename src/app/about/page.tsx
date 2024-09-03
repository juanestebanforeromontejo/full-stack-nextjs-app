import { cookies } from 'next/headers'
import React from 'react'

const page = () => {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");

  console.log(theme);
  return (
    <div>
      <h1 className="h1 text-gray-300">About page {new Date().toLocaleTimeString()}</h1>
    </div>
  )
}

export default page
