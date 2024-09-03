import Products from '@/components/Products'
import Reviews from '@/components/Reviews'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <h1 className="h1 text-gray-300">Product detial page</h1>
      <Suspense fallback={<h1 className="h1 text-gray-300">loading create Product ...</h1>}>
        <Products/>
      </Suspense>

      <Suspense fallback={<h1 className="h1 text-gray-300">loading create Review ...</h1>}>
        <Reviews/>
      </Suspense>
    </div>
  )
}

export default page
