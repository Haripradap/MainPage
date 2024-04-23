import { FaMoon } from "react-icons/fa"; 

import { Button, Navbar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";





const Header = () => {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2 bg-blend-color" >
        <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
          <span  className='px-2 py-1 bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg text-white'>SRMS</span>
        </Link>
     
      
      <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-10 hidden sm:inline' color="gray" pill>
          <FaMoon/>
        </Button>
        <Link to='/sign-in'>
          <Button gradientDuoTone='pinkToOrange'>
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle/>
        
      </div>
     <Navbar.Collapse >
           <Navbar.Link active={path === '/'} as={'div'}>
             <Link to='/'>Home</Link>
             </Navbar.Link>
              <Navbar.Link active={path === '/about'} as={'div'}>
             <Link to='/about'>About</Link>
           </Navbar.Link>
        </Navbar.Collapse>
    </Navbar>

 

  )
}

export default Header