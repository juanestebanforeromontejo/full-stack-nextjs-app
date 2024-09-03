"use client";

import { useState, useEffect } from "react";
import NewProduct from "./NewProduct";

const CreateProduct = () => {
  const [create, setCreate] = useState(true);
  const [productName, setProductName] = useState("");
  const [commentBoddy, setCommentBody] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [todoList, setToDoList] = useState<string[][]>(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue === null) return [] 
    return JSON.parse(localValue);
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todoList))
  }, [todoList])

  function handleCreate() {
    if (create === true) {
      setCreate(false);
      return
    }
    setCreate(true);
    return
  }

  function handleAuthorName(name: string) {
    setProductName(name);
    return
  }

  function handleCommentBoddy(body: string) {
    setCommentBody(body);
    return
  }

  function handleImageUrl(url: string) {
    setImageUrl(url);
    return
  }

  function onAdd() {
    if (productName === "" && commentBoddy === "") {
      return
    }

    setToDoList([[productName, commentBoddy, imageUrl], ...todoList])
    return
  }
  return (
    <div className="p-10">
      <button className="rounded bg-gray-700 p-3 text-gray-300 text-3xl font-bold" onClick={handleCreate}>Create Product +</button>
      {create === true && (
        <div className="flex flex-col p-10">
          <input className="bg-gray-700 m-3 p-3 text-gray-300 outline-none rounded font-bold text-3xl placeholder:text-gray-500" 
            placeholder="Put Your Product name" 
            onChange={e => handleAuthorName(e.target.value)}/>

          <input className="bg-gray-700 m-3 p-3 text-gray-300 outline-none rounded font-bold text-3xl placeholder:text-gray-500" 
            placeholder="Put Your Product Description" 
            onChange={e => handleCommentBoddy(e.target.value)}/>

          <input className="bg-gray-700 m-3 p-3 text-gray-300 outline-none rounded font-bold text-3xl placeholder:text-gray-500" 
            placeholder="Put The Link of Your Img" 
            onChange={e => handleImageUrl(e.target.value)}/>

          <button className="rounded m-3 p-3 bg-gray-700 text-gray-300 text-3xl font-bold" 
            onClick={onAdd}>Add</button>
        </div>
      )}

      {create === false && (todoList.map((list) => <NewProduct productName={list[0]} productDescription={list[1]} productImageUrl={list[2]} key={list[2]}/>))}
    </div>
  )
}

export default CreateProduct
