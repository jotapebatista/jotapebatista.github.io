import { useState } from "react"
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function NavBar({darkMode, setDarkMode}) {

    return (
        <nav className="py-10 mb-12 flex px-10 justify-between dark:text-white md:px-20" >
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
    )
}
