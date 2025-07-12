import React from 'react'
import { FiArrowDownRight } from "react-icons/fi";
import { Link } from 'react-scroll';

const NavbarBtn = () => {
  const [darkMode, setDarkMode] = React.useState(false)
  const changeTheme = () => {
    setDarkMode(!darkMode)
  }
  return (
    <div className='flex'>

      <button onClick={changeTheme} className={`md:px-4 md:py-2 sm:px-2 sm:py-1  rounded-full text-2xl font-bold mr-4 ${darkMode ? "bg-grey" : "bg-white"}`}>
        {darkMode ? "🌙": "☀️"}
      </button>

        <button className='md:px-4 md:py-2 sm:px-2 sm:py-1 rounded-full sm:text-lg lg:text-xl font-bold text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-cyan to-orange hover:scale-110 transition-all duration-500 hover:border-orange hover:shadow-cyanShadow'>
          <Link 
          to='contactLeft'
          smooth="true"
          spy="true"
          duration={500}
          offset={-60}
          >
          Hire Me 
          </Link>
        <FiArrowDownRight className='sm:hidden md:block'/>
       </button>
    </div>
  )
}

export default NavbarBtn
