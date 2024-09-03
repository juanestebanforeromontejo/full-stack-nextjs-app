"use client";
import Image from "next/image"
interface Props {
  authorName: string,
  authorDescription: string,
  authorImg: string,
}

const NewReview = (props: Props) => {
  return (
    <div className="flex flex-col p-10 border-gray-950 rounded mb-10">
      <Image src={props.authorImg} alt="" className="aspect-square bg-gray-900 rounded-full object-cover block m-3 w-24 h-24" width={24} height={24}/>

      <p className="text-3xl text-gray-300 block m-3 bg-gray-900 p-3 rounded">Name: {props.authorName}</p>
      <p className="text-3xl text-gray-300 block m-3 bg-gray-900 p-3 rounded">Description: {props.authorDescription}</p>
    </div>
  )
}

export default NewReview
