import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BACK_SIGN } from './Icon';

const HeaderSteps = (headerSteps) => {
    const navigate = useNavigate();

    return (
        <div className='shadow-login pt-8 pb-6 px-5 mb-6'>
            <div className='flex items-center gap-3 font-inter font-normal text-sm text-rich-black'>
                <span className='cursor-pointer' onClick={() => navigate(-1)}><BACK_SIGN /></span>
                {headerSteps.text}
            </div>
            <div className='max-w-[320px] mx-auto flex items-center justify-between gap-4 mt-10 relative z-[1]'>
                <hr className='border opacity-10 border-rich-black max-w-[290px] absolute w-full z-0 left-[5%] top-[27%]' />
                {/* Steps */}
                <div className='flex flex-col gap-1.5 items-center relative'>
                    <div className='size-8 rounded-full flex items-center justify-center border border-rich-black bg-white'>
                        <span className=' font-inter font-bold text-xl text-[#4E4E4E]'>1</span>
                    </div>
                    <p className='text-rich-black font-inter text-sm font-normal opacity-70'>Address</p>
                </div>
                <div className='flex flex-col gap-1.5 items-center relative'>
                    <div className='size-8 rounded-full flex items-center justify-center border border-rich-black bg-white'>
                        <span className=' font-inter font-bold text-xl text-[#4E4E4E]'>2</span>
                    </div>
                    <p className='text-rich-black font-inter text-sm font-normal opacity-70'>Order Summary</p>
                </div>
                <div className='flex flex-col gap-1.5 items-center relative'>
                    <div className='size-8 rounded-full flex items-center justify-center border border-rich-black bg-white'>
                        <span className=' font-inter font-bold text-xl text-[#4E4E4E]'>3</span>
                    </div>
                    <p className='text-rich-black font-inter text-sm font-normal opacity-70'>Payment</p>
                </div>
            </div>
        </div>
    );
};

export default HeaderSteps;
