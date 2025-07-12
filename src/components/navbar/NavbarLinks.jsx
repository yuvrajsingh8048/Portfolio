import React from 'react'
import { Link } from 'react-scroll'

const links = [
  { link: "Home", section: "hero" },
  { link: "About Me", section: "aboutme" },
  { link: "Skills", section: "skills"},
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
]

const NavbarLinks = () => {
  return (
    <ul className='flex flex-col sm:absolute sm:bg-cyan/30 sm:top-full sm:left-0 sm:w-full lg:bg-black sm:backdrop-blur-lg lg:flex-row lg:static gap-6 py-4 text-white font-bold text-center font-body'>
      {links.map((link, index) => (
        <li key={index} className='group'>
          <Link 
          to={link.section}
          smooth={true}
          spy={true}
          duration={500}
          offset={-130}
          className='cursor-pointer hover:text-cyan transition-all duration-500'>
            {link.link}
          </Link>
          <div className='mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-400'></div>
        </li>
      ))}
    </ul>
  )
}

export default NavbarLinks
