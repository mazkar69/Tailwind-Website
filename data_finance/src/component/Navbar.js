import React from 'react'
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
const Navbar = () => {

    const [nav, setNav] = useState(false);


    const handleNav = () => {
        setNav(!nav);
    }
    return (
        <div className='text-white flex justify-between items-center h-24 max-w-[1240px] px-4 mx-auto'>
            <h1 className='w-full text-3xl font-bold text-[#00d9fa] '>Dazz's World</h1>
            <ul className='hidden md:flex'>
                <li className='p-4 cursor-pointer hover:text-slate-500'>
                    Home
                </li>
                <li className='p-4 cursor-pointer hover:text-slate-500'>
                    Company
                </li>
                <li className='p-4 cursor-pointer hover:text-slate-500'>
                    Resourse
                </li>
                <li className='p-4 cursor-pointer hover:text-slate-500'>
                    About
                </li>
                <li className='p-4 cursor-pointer hover:text-slate-500'>
                    ContactUs
                </li>

            </ul>
            <div onClick={handleNav} className="block md:hidden">
                { nav?<AiOutlineClose size={(20)}/> :<AiOutlineMenu size={(20)}/> }

            </div>
            <div className={nav?'fixed left-0 top-0 h-full border-r border-r-gray-900 pt-4 px-4 bg-[#000300] flex flex-col  w-3/5 ease-in-out duration-500':'fixed left-[-100%]'}>

                <h1 className='w-full text-3xl font-bold text-[#00d9fa]  m-4 '>Dazz's World</h1>

                <ul className='uppercase p-4 '>
                    <li className='p-4 border-b border-gray-600'>
                        Home
                    </li>
                    <li className='p-4 border-b border-gray-600'>
                        Company
                    </li>
                    <li className='p-4 border-b border-gray-600'>
                        Resourse
                    </li>
                    <li className='p-4 border-b border-gray-600'>
                        About
                    </li>
                    <li className='p-4'>
                        Contact
                    </li>

                </ul>
            </div>

        </div>
    )
}

export default Navbar