import React from "react"
import Image from "next/image"
import Position from "./Experience"
import {SiGmail} from 'react-icons/si'
import { SocialIcon } from "react-social-icons"

type Props = {}

const Contact = (props: Props) => {
  return (
    <section id="contact" >
        <div>
           <h1 className="text-center font-bold text-5xl pt-5 sm:pt-2">Contact me</h1> 
           <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
           <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDbtmMJWHgvrLQQLvsRgGbwBnvsJmLZFHtzNhXHcKqGtFckmWDMkGsCHlrfmbSqHDNwjbzh" target={"sachinjayadev18@gmail.com"}
       className="bg-gray-700 flex flex-col justify-center items-center p-10 rounded-2xl w-full h-[250px]  hover:bg-gray-800 transition-all  cursor-pointer space-y-3 text-md font-thin tracking-widest">
        <SiGmail size={"100px"}/>
        <p className="text-center text-teal-100">Write to me at<br/>sachinjayadev18@gmail.com</p>
      </a>
      <div className="text-center">
            <SocialIcon className="hover:scale-125 transition-all" target="_blank" url="https://github.com/Sachin5679" title="Github" fgColor="gray" bgColor="transparent"/>
            <SocialIcon className="hover:scale-125 transition-all" target="_blank" url="https://www.linkedin.com/in/sachin-jayadev-010492232/" fgColor="gray" title="LinkedIn" bgColor="transparent"/>
      </div>
        </div>
    </section>
  )
}

export default Contact