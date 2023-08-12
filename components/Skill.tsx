import Image from "next/image";
import React from 'react'

type Props = {
  url: string,
  title: string;
}

const Skill = ({url, title}: Props) => {
  return (
    <img 
    title={title}
    className="md:mx-14 px-2 sm:mx-5 group relative flex justify-center cursor-pointer h-12 lg:h-14 transition-transform hover:scale-125 dark:bg-white-500 p-2 "
    src={url} alt={title}>
    </img>
  )
}

export default Skill