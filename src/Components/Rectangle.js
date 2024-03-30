import React from 'react'
import user from './assets/user.png'
import location from './assets/location.png'
import server from './assets/Server.png'

export const Rectangle = () => {
    return (
        <>
            <div className='md:shadow-md '>
                <div className='md:flex justify-around px-10 py-5 md:p-10 mx-auto mt-2 md:mt-20 '>
                    <div className='flex mb-4  '>
                        <img src={user} />
                        <div className='flex flex-col ml-7 '>
                            <p className='text-[#0B132A] font-bold text-lg md:text-2xl  ' >90+</p>
                            <p className=' text-[#4F5665] text-base md:text-normal '>Users</p>
                        </div>
                    </div>
                    <div className='md:border-r-2 '></div>
                    <div className='flex mb-4 '>
                        <img src={location} />
                        <div className='flex flex-col ml-7 '>
                            <p className='text-[#0B132A] font-bold text-lg md:text-2xl  ' >30+</p>
                            <p className=' text-[#4F5665] text-base md:text-normal '>Locations</p>
                        </div>

                    </div>
                    <div className='md:border-r-2 '></div>

                    <div className='flex mb-4 '>
                        <img src={server} />
                        <div className='flex flex-col ml-7 '>
                            <p className='text-[#0B132A] font-bold text-lg md:text-2xl  ' >50+</p>
                            <p className=' text-[#4F5665] text-base md:text-normal '>Servers</p>
                        </div>

                    </div>

                </div>
            </div>
        </>)
}
