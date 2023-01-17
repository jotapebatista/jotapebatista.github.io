import deved from "/jb_png.png";
import {
    AiFillGithub,
    AiFillLinkedin,
    AiFillMail,
} from "react-icons/ai";
  

function PersonalInfo() {
    return (
        <div className="text-center py-2">
            <p className="text-[#64ffda] text-xl">Hi, my name is</p>
            <h2 className="text-5xl py-2 text-gray-800 font-extrabold dark:text-slate-200 md:text-6xl">
                João Batista
            </h2>
            <h3 className="text-2xl py-2 text-slate-500 dark:text-slate-400 md:text-3xl">
                Front-End Developer
            </h3>
            <p className="text-md py-5 text-gray-800 dark:text-gray-200 max-w-2xl mx-auto md:text-xl">
                Newly-minted front-end developer with a passion for coding, drive to improve, and ability to learn quickly.
                Seeking to make valuable contributions to a team and excel in challenging environments.
            </p>
            <button class="bg-transparent text-[#64ffda] py-2 px-4 border border-[#64ffda] rounded hover:bg-teal-400 hover:bg-opacity-10  ">Know More</button>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                <a className='hover:text-teal-600' href='https://github.com/jotapeoliveira/' rel='noreferrer' target="_blank"><AiFillGithub /> </a>
                <a className='hover:text-teal-600' href='https://www.linkedin.com/in/jotapebatista/' rel='noreferrer' target="_blank"><AiFillLinkedin /> </a>
                <a className='hover:text-teal-600' href='mailto:joao-oliveirabatista@hotmail.com"' rel='noreferrer' target="_blank"><AiFillMail /> </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 to-white rounded-full w-80 h-80 overflow-hidden mt-20">
                <img src={deved} width={350} alt='yup, thats me' className='mx-auto' />
            </div>
        </div>
    )
}

export default PersonalInfo


