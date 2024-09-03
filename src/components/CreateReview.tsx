"use client";

import { useEffect, useState } from "react";
import NewReview from "./NewReview";

const CreateReview = () => {
  const [create, setCreate] = useState(true);
  const [authorName, setAuthorName] = useState("");
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
    setAuthorName(name);
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
    if (authorName === "" && commentBoddy === "") {
      return
    }

    setToDoList([[authorName, commentBoddy, imageUrl], ...todoList])
    return
  }
  return (
    <div className="p-10">
      <button className="rounded bg-gray-700 p-3 text-gray-300 text-3xl font-bold" onClick={handleCreate}>Create Comment +</button>
      {create === true && (
        <div className="flex flex-col p-10">
          <input className="bg-gray-700 m-3 p-3 text-gray-300 outline-none rounded font-bold text-3xl placeholder:text-gray-500" placeholder="Put Your Author name" 
            onChange={e => handleAuthorName(e.target.value)}/>

          <input className="bg-gray-700 m-3 p-3 text-gray-300 outline-none rounded font-bold text-3xl placeholder:text-gray-500" placeholder="Put Your Comment Description" 
            onChange={e => handleCommentBoddy(e.target.value)}/>

          <input className="bg-gray-700 m-3 p-3 text-gray-300 outline-none rounded font-bold text-3xl placeholder:text-gray-500" placeholder="Put The Link of Your Img" 
            onChange={e => handleImageUrl(e.target.value)}/>

          <button className="rounded m-3 p-3 bg-gray-700 text-gray-300 text-3xl font-bold" 
            onClick={onAdd}>Add</button>
        </div>
      )}

      {create === false && (todoList.map((list) => <NewReview authorName={list[0]} authorDescription={list[1]} authorImg={list[2]} key={list[2]}/>))}
    </div>
  )
}

export default CreateReview
