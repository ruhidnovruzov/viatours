import React from 'react';
import Image from 'next/image';
import logo from '../public/assets/logo.png'

function Header() {
    return (
      <header className='flex items-center  py-6 pl-20 w-full fixed bg-white'>
      <div className='flex gap-7 w-[50%] justify-center'>
          <Image src={logo} alt="Picture of the author" width={100} height={100} quality={100}/>
          <input type="text" placeholder='Search destinations or activities' className='w-[60%]'/>
      </div>
      <div>
        <ul className='flex gap-6'>
          <li>Destinations</li>
          <li>Activities</li>
          <li>USD</li>
          <li>Sign up</li>
        </ul>
      </div>
      <div className='pl-6'>
        <button className='text-white rounded-[200px] bg-[#EB662B] p-2'>Log in</button>
      </div>
      </header>
      
    );
  }
  
export default Header;
