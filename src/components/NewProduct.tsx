"ues client";
import Image from "next/image"
import { useState } from "react"
interface Props {
  productName: string,
  productDescription: string,
  productImageUrl: string,
}

const NewProduct = (props: Props) => {
  const [putImage, _] = useState(() => {
    if (props.productImageUrl === "") {
      return false
    }
    return true
  });

  return (
    <div className="flex flex-col p-10 border-gray-800 rounded bg-gray-800 mb-10">
      {putImage === true && (
        <Image src={props.productImageUrl} alt="" className="aspect-square rounded-full object-cover block m-3 w-24 h-24" width={24} height={24}/>
      )}
      <p className="text-3xl text-gray-300 block m-3">Name: {props.productName}</p>
      <p className="text-3xl text-gray-300 block m-3">Description: {props.productDescription}</p>
    </div>
  )
}

export default NewProduct
