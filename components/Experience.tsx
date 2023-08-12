import Image from "next/image";
import React from 'react'

type Props = {
  url: string,
  title: string;
  subtitle: string;
}

const Position = ({url, title, subtitle}: Props) => {
  return (
    // <img 
    // title={title}
    // className="group relative flex cursor-pointer w-24 lg:w-32 transition-transform hover:scale-125"
    // src={url} alt={title}>
    // </img>
    <div className="bg-gray-700 px-5 py-10 rounded-lg shadow-inner hover:bg-gray-500 hover:duration-500">
        <h1 className="font-bold text-xl text-white">{title}</h1>
        <img className="mt-2 mb-2 rounded-full h-25 w-25" src={url} alt={title} />
        <p className="text-white">{subtitle}</p>
    </div>
  )
}

export default Position