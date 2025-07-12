import React from 'react'
import { Link } from 'react-scroll'

const links = [
  { link: "Home", section: "hero" },
  { link: "About Me", section: "aboutme" },
  { link: "Skills", section: "skills"},
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
]

const FooterMain = () => {
  return (
    <div className='px-4'>
        <div className='w-full h-1 bg-lightGrey mt-24'></div>
        <div className='md:flex sm:hidden justify-between mt-4 max-w-[1200px] mx-auto'>
            <p className='text-3xl text-lightGrey'>Yuvraj Singh</p>
            <ul className='flex gap-4 text-xl text-lightGrey'>
                {links.map((link, index) => (
                <li id={index}>
                    <Link 
                      to={link.section}
                      smooth={true}
                      spy={true}
                      duration={500}
                      offset={-130}
                      className='cursor-pointer hover:text-cyan transition-all duration-500'>
                      {link.link}
                    </Link>
                </li>
                ))}
            </ul>
        </div>
        <p className='max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-lightBrown relative'> &copy; 2025 Yuvraj Singh | All Rights Reserved</p>
    </div>
  )
}

export default FooterMain
