import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {

    const [showMenu,setShowMenu]=useState(false);

  return (
    <div>
        <div className='mt-4 flex justify-between'>
            <div className='text-2xl mx-2'>Logo</div>
        <div className='font-bold md:text-4xl text-2xl'>Book Glimpse</div>
        <div className='flex flex-row gap-4 mx-2 md:flex hidden'>
            <div>Home </div>
            <div>BooksInsights</div>
            <div>Login</div>
            <div>SignUp</div>
        </div>
       
            
        <div className='md:hidden flex mx-3 relative'>
            <RxHamburgerMenu 
            size={30}
            onClick={()=>setShowMenu(!showMenu)}
            />
            <div className={showMenu?"hidden":"flex"}>
            <div className='flex flex-col gap-4 mx-2 absolute top-[50px] right-[20px]'>
            <div>Home </div>
            <div>BooksInsights</div>
            <div>Login</div>
            <div>SignUp</div>
            </div>
         
        </div>
        </div>
        </div>
      
    </div>
  )
}
