import React from 'react'



const Hero = () => {
    return (
        <div className='text-white'>
            <div className='max-w[800px] mx-auto flex flex-col justify-center items-center text-center h-screen' >
                <p className='uppercase text-[#00d9fa] font-bold p-2'>Growing with data analitics </p>
                <h1 className='md:text-7xl sm:text-6xl 4xl font-bold md:py-6'>
                    Grow with data.
                </h1>
                <div className="flex justify-center item-center">
                    <p className='md:5xl sm:4xl text-xl font-bold md:pl-4 pl-2'>Fast, flexiale and financing for BTC</p>
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-500 p-4'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>

                <button className=' bg-[#00d9fa] w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:bg-[#59aeb7]'>Get Started</button>


            </div>
        </div>
    )
}

export default Hero
