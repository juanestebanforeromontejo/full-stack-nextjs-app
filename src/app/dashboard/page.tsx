"use client";
import React, { useState } from 'react'

const Page = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <h1 className="h1 text-gray-400">Dashboard</h1>
      <input value={name} onChange={e => setName(e.target.value)} className="outline-none text-gray-300 text-2xl m-3 p-3 rounded bg-gray-800"/>
      <p className="text-gray-400 text-2xl m-3 p-3">hello {name}</p>
    </div>
  )
}

export default Page
