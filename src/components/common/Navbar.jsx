import React from 'react';
import logo from "../../assets/images/webp/logo.png";
import { ADDTOCART, BURGER, LOGIN, SEARCH } from './Icon';

const NavBar = () => {
    return (
        <>
            <div className='flex items-center pt-5 justify-between'>
                <a href="/" className='max-w-[89px] max-h-[36px]'>
                    <img src={logo} alt="logo" className='max-w-[89px] max-h-[36px]' />
                </a>
                <div className='flex items-center gap-3'>
                    <a href="/" className='p-[3px] rounded-[100px] shadow-login flex items-center gap-1 bg-off-white font-inter font-normal text-xs'>
                        <span><LOGIN /></span>
                        Log In
                    </a>
                    <a href="/" className='p-1.5 rounded-full shadow-login bg-off-white'>
                        <ADDTOCART />
                    </a>
                    <a href="/" className='p-1.5 rounded-full shadow-login bg-off-white'>
                        <BURGER />
                    </a>
                </div>
            </div>
            <div className='p-[9px] rounded-[10px] bg-rich-black bg-opacity-[6%] mt-6 flex items-center gap-2'>
                <SEARCH />
                <input type="text" className='font-inter font-medium text-xs text-rich-black opacity-70 border-none outline-none w-full bg-transparent' placeholder='Search For Iphones...' />
            </div>
        </>
    );
};

export default NavBar;
