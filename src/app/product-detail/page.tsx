import Product from '@/components/Product'
import React from 'react'

const imagesUrl = [
  "https://thumbs.dreamstime.com/b/duck-visits-hong-kong-de-goma-gigante-30976293.jpg",
]

const page = () => {
  return (
    <div>
      <h1 className="h1 text-gray-300">Product detial page</h1>
      <Product productName="Duck" productDescription="a little duck that you can play with"
        productImageUrl={imagesUrl[0]}/>
    </div>
  )
}

export default page
