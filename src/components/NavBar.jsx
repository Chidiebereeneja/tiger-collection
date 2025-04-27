import React from 'react'
import AppLogo from './AppLogo'
import { IoSearchOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { RxPerson } from "react-icons/rx";
import { IoCartOutline } from "react-icons/io5";



export default function NavBar() {
  return (
    <nav className='w-[100%] max-w-[1200px] h-full'>
        <ul className='flex justify-around items-center h-full'>
            <li>
                <AppLogo/>
            </li>
            <li className='flex gap-6'>
                {["Home", "Men", "Women", "Unisex", "Categories"].map((item) => item === "Categories"? <select className='text-textColor-100 text-[16px] font-normal leading-[100%] cursor-pointer outline-none'>
                    <option>{item}</option>
                </select> : <a key={item} className='text-textColor-100 text-[16px] font-normal leading-[100%] cursor-pointer'>{item}</a>)}
            </li>

            <li className='flex items-center gap-2 border h-[30px] rounded-[8px] py-[2px] px[20px] bg-searchInputCol-100 '>
               <IoSearchOutline className='inline-block p-[1px] ml-2 text-textColor-100'/>
                <input type="search" placeholder="Search" className='outline-none h-[100%] text-[16px] text-textColor-100 '/>
            </li>

            <li className='flex gap-[12px]'>
                <CiHeart className='text-textColor-100 h-[30px] w-[30px] p-[7px] rounded-[8px] cursor-pointer bg-searchInputCol-100'/>
                <RxPerson className='text-textColor-100 h-[30px] w-[30px] p-[7px] rounded-[8px] cursor-pointer bg-searchInputCol-100'/>
                <IoCartOutline className='text-textColor-100 h-[30px] w-[30px] p-[7px] rounded-[8px] cursor-pointer bg-searchInputCol-100'/>
            </li>
        </ul>
    </nav>
  )
}
