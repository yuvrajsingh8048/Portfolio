import React from 'react'
import NavbarLogo from './NavbarLogo'
import NavbarLinks from './NavbarLinks'
import NavbarBtn from './NavbarBtn'
import { RxHamburgerMenu } from "react-icons/rx";
import { ImCross } from "react-icons/im";



const NavbarMain = () => {
  const [menu, setMenu] = React.useState(false)
  const toggleMenu = () => {
  setMenu(!menu)
}

  return (
    <nav className='mt-1 max-w-[1300px] w-full px-4 flex fixed left-[50%] -translate-x-[50%] z-20 gap-4mt-2'>
        <div className='sm:h-[60px] lg:h-[80px] flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center sm:p-3 md:p-6 rounded-full  border-[0.5px] border-orange'>
            <NavbarLogo />
            <div className={`${menu ? "sm:block": "sm:hidden"} lg:block`}>
              <NavbarLinks />
            </div>
            <NavbarBtn />
        </div>
        <div className='h-[60px] lg:hidden sm:block flex p-3 bg-black items-center justify-center rounded-3xl border-[0.5px] border-orange ml-1'>
            <button onClick={toggleMenu} className='text-2xl rounded-full text-white p-1'>
                {menu ? <ImCross/> : <RxHamburgerMenu /> }
            </button>
        </div>
    </nav>
  )
}

export default NavbarMain
