import React from 'react';
import {Link} from 'react-router-dom';
import logo from './image/logo.PNG'

const Navbar = () => {
  return (
    <div>
        <nav className='bg-[#191919]'>
            <Link to='/'>
                <div className='flex items-center'>
                    <img src={logo} alt="logo" className='w-10'/>
                    <div className='pl-2 flex flex-col text-center text-white'>
                        <span className='text-xl font-bold'>
                            Josephine's
                        </span>
                        <span className='text-l font-bold'>
                            Foundation
                        </span>
                    </div>
                    <ul className='flex flex-col lg:flex-row gap-4'>
                        <Link to='/'>
                            <span className='text-white text-l font-semibold'>
                                Home
                            </span>
                        </Link>
                        <Link to='/mission'>
                            <span className='text-white text-l font-semibold'>
                                Mission & Vision
                            </span>
                        </Link>
                        <Link to='/mission'>
                            <span className='text-white text-l font-semibold'>
                               Our track
                            </span>
                        </Link>
                         <Link to='/contact'>
                            <span className='text-white text-l font-semibold'>
                                Contact
                            </span>
                        </Link>
                        <Link to='/donate'>
                            <span>

                            </span>
                        </Link>
                        
                    </ul>
                </div>
            </Link>

        </nav>
    </div>
  )
}

export default Navbar;