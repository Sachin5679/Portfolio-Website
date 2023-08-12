import React from 'react'
import Skill from './Skill'

type Props = {}

const Skills = (props: Props) => {
  return (
    <section id='skills'>
        <div className="my-12 pb-12 md:pt-5 md:pb-10">
            <h1 className="text-center font-bold text-5xl sm:pt-4">
                Skills
            <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>
        </div>
        <div className="grid grid-cols-5 gap-7 justify-center md:justify-start pb-48">
          <Skill url="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" title="TailwindCSS"/>
          <Skill url="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" title="React"/>
          <Skill url="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" title="JavaScript"/>
          <Skill url="https://www.svgrepo.com/show/102011/css-3.svg" title="CSS 3"/>
          <Skill url="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg" title="HTML 5"/>
          <Skill url="https://www.svgrepo.com/show/331760/sql-database-generic.svg" title="SQL"/>
          <Skill url="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" title="C++"/>
          <Skill url="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png" title="C"/>
          <Skill url="https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg" title="Git"/>
          <Skill url="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/200px-GitHub_Invertocat_Logo.svg.png" title="GitHub"/>
          <Skill url="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/121px-Python-logo-notext.svg.png" title="Python"/>
          <Skill url="https://www.svgrepo.com/show/354119/nodejs-icon.svg" title="node"/>
          <Skill url="https://www.svgrepo.com/show/330398/express.svg" title="express"/>
          <Skill url="https://www.svgrepo.com/show/373845/mongo.svg" title="mongo"/>
          <Skill url="https://www.svgrepo.com/show/373554/django.svg" title="django"/>
          <Skill url="https://www.svgrepo.com/show/368858/nextjs.svg" title="next"/>
          <Skill url="https://www.svgrepo.com/show/374146/typescript-official.svg" title="typescript"/>
          <Skill url="https://www.svgrepo.com/show/373968/photoshop.svg" title="photoshop"/>
          <Skill url="https://www.svgrepo.com/show/464937/figma.svg" title="figma"/>
          <Skill url="https://www.svgrepo.com/show/305835/canva.svg" title="canva"/>
        </div>

    </section>
  )
}

export default Skills
