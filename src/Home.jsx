import { useState } from 'react';
import deved from "/jb_png.png";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";


export default function Home() {

  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className=" bg-white px-10 dark:bg-gray-800 md:px-20 lg:px-40 transition duration-700 min-h-screen">
        <nav className="py-10 mb-12 flex justify-between dark:text-white" >
          <ul className="flex ml-auto">
            <li className='px-5'>
              <a className='hover:text-teal-600 transition duration-300' href="#">&lt; João Batista /&gt;</a>
            </li>
            <li>
              <BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                className=" cursor-pointer text-2xl "
              />
            </li>
          </ul>
        </nav>
        <div className="text-center p-10 py-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
            João Batista
          </h2>
          <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
            Front-End Developer
          </h3>
          <p className="text-md py-5 text-gray-800 dark:text-gray-200 max-w-2xl mx-auto md:text-xl">
            Newly-minted front-end developer with a passion for coding, drive to improve, and ability to learn quickly.
            Seeking to make valuable contributions to a team and excel in challenging environments.
          </p>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <a className='hover:text-teal-600' href='https://github.com/jotapeoliveira/' rel='noreferrer' target="_blank"><AiFillGithub /> </a>
            <a className='hover:text-teal-600' href='https://www.linkedin.com/in/jotapebatista/' rel='noreferrer' target="_blank"><AiFillLinkedin /> </a>
            <a className='hover:text-teal-600' href='mailto:joao-oliveirabatista@hotmail.com"' rel='noreferrer' target="_blank"><AiFillMail /> </a>
          </div>
          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
            <img src={deved} width={350} alt='yup, thats me' className='mx-auto' />
          </div>
        </div>
      </main>
    </div>
  )
}
