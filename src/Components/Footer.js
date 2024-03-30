import React from 'react';
import logo from './assets/Vector.png';
import facebook from './assets/Facebook.png';
import twitter from './assets/Twitter.png';
import instagram from './assets/Instagram.png';

export const Footer = () => {
    return (
        
        <div id="help" className='flex-wrap md:flex md:justify-between bg-[#F8F8F8] pb-5 md:pb-10 px-5 md:px-12 lg:px-24 mt-6 md:mt-0'>
            <div className='w-full md:w-1/2  mx-auto'>
                <div className='flex '>
                    <img src={logo} alt='logo' className='mr-2 text-sm ' />
                    <h1 className='text-[#0B132A] text-lg md:text-xl font-medium my-auto'>Lasles<span className='text-[#0B132A] text-lg md:text-xl font-bold my-auto'>VPN</span></h1>
                </div>
                <p className='text-[#4F5665] text-sm md:text-base font-normal mt-5'><span className='font-medium'>LaslesVPN </span>is a private virtual network that has <br className='hidden md:block' /> unique features and has high security.</p>
                <div className='flex mt-4 md:mt-0 md:mx-0 md:my-5 md:mr-12'>
                    <img src={facebook} alt='Facebook' />
                    <img src={twitter} alt='Twitter' />
                    <img src={instagram} alt='Instagram' />
                </div>
                <p className='text-[#4F5665] text-sm md:text-base font-normal'>©2020LaslesVPN</p>
            </div>



            <div className='w- full md:w-1/2 flex mt-5 md:mt-0'>
                <div className='w-3/4'>
                    <p className='text-[#0B132A] text-medium md:text-lg font-medium mb-4'>Product</p>
                    <ul className='text-[#4F5665] text-sm md:text-base font-normal space-y-4'>
                        <li><a href='#'>Download</a></li>
                        <li><a href='#'>Pricing</a></li>
                        <li><a href='#'>Locations</a></li>
                        <li><a href='#'>Server</a></li>
                        <li><a href='#'>Countries</a></li>
                        <li><a href='#'>Blog</a></li>
                    </ul>
                </div>
                <div className='w-3/4'>
                    <p className='text-[#0B132A] text-medium md:text-lg font-medium mb-4'>Engage</p>
                    <ul className='text-[#4F5665] text-sm md:text-base font-normal space-y-4'>
                        <li><a href='#'>LaslesVPN?</a></li>
                        <li><a href='#'>FAQ</a></li>
                        <li><a href='#'>Tutorials</a></li>
                        <li><a href='#'>About Us</a></li>
                        <li><a href='#'>Privacy Policy</a></li>
                        <li><a href='#'>Terms of Service</a></li>
                    </ul>
                </div>
                <div className='w-3/4 '>
                    <p className='text-[#0B132A] text-medium md:text-lg font-medium mb-4'>Earn Money</p>
                    <ul className='text-[#4F5665] text-sm md:text-base font-normal space-y-4'>
                        <li><a href='#'>Affiliate</a></li>
                        <li><a href='#'>Become Partner</a></li>
                    </ul>
                </div>
            </div>
        </div>


    );
};