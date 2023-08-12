import React from "react"
import Image from "next/image"
import Position from "./Experience"



const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-40">
        <h1 className="text-center font-bold text-5xl sm:pt-4">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-7 md:space-y-0 md:p-4 md:flex-row md:text-left">
        {/* <div className="left-1/2 -ml-0.5 w-1.5 h-5 bg-purple-600 rounded-md"></div>
        <div className="left-1/2 -ml-0.5 w-2 h-10 bg-purple-600 rounded-md"></div>
        <div className="left-1/2 -ml-0.5 w-2.5 h-20 bg-purple-600 rounded-md"></div>
        <div className="left-1/2 -ml-0.5 w-3 h-25 bg-purple-600 rounded-md"></div> */}
          <div className="md:w-1/2 ">
            
            {/* <h1 className="text-center text-5xl font-bold mb-6 md:text-left">
              Who am I?
            </h1> */}
            <p className="text-xl">
                I am a <span className='font-bold text-orange-500'>Full Stack web developer</span>, and a Computer Science and Engineering student at <span className='font-bold text-purple-500'>IIITM Gwalior</span> , India. I am an enthusiastic learner willing to explore new technologies and build amazing stuff.
            </p>
            <p className="text-xl">
                As a third year student, I am looking forward to expanding my knowledge base and gaining some work experience using the knowledge I have attained whilst exploring the field of web development. So far, I have taught myself and built projects using the MERN stack and have some experience building using Django as well.
            </p>
          </div>
          {/* <div className="left-1/2 -ml-0.5 w-3 h-25 bg-purple-600 rounded-md"></div>
          <div className="left-1/2 -ml-0.5 w-2.5 h-20 bg-purple-600 rounded-md"></div>
          <div className="left-1/2 -ml-0.5 w-2 h-10 bg-purple-600 rounded-md"></div>
        <div className="left-1/2 -ml-0.5 w-1.5 h-5 bg-purple-600 rounded-md"></div> */}
        
        
        
          {/* <div className="text-center md:w-1/2 md:text-left">
          <h1 className="text-center text-5xl font-bold mb-6 md:text-left">
            Experience
          </h1>
          <div className="flex text-center justify-center z-10 md:justify-start pb-35">
            <Position url="https://media.licdn.com/dms/image/C510BAQEBxDFxLTHO2g/company-logo_200_200/0/1554193826994?e=2147483647&v=beta&t=A8j3JdLLw5_HlBcT8EYQScN6JWurPlu_ILIxbtsghKQ" title="Humans of Gwalior" subtitle="RCoY IIITM"/>
        </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default AboutSection