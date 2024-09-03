"use client";
import "client-only";
import { clientSideFunction } from '@/utils/client-utils';
import React from 'react'

const page = () => {
  console.log("client Route Rendered")
  const result = clientSideFunction();

  return (
    <div>
      <h1 className="h1 text-gray-300">ClientRoutePage</h1>
      <p className="text-gray-300 text-3xl m-3">{result}</p>
    </div>
  )
}

export default page
