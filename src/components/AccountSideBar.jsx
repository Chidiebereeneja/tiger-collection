import React from 'react'
import SectionHeader from './SectionHeader.jsx'
import { GoPerson } from "react-icons/go";
import { TbLockCog } from "react-icons/tb";import { FaArrowRightFromBracket } from "react-icons/fa6";
import AccountMyOrder from './AccountMyOrder.jsx';



const RenderLink = function({linkText, linkIcon}) {
    return (
        <li className="h-[40px] w-[255px] text-[18px] font-semibold leading-[100%] text-textColor-100 border-l-[4px] border-l-transparent transition-all hover:bg-searchInputCol-100 hover:border-sectionHeaderCol-100 flex items-center gap-2 cursor-pointer pl-5  ">
            {linkIcon}
            <p>{linkText}</p>
        </li>
    )
}

const SideBarLinks = function(){
    return (
        <ul className="flex flex-col gap-2 mt-3 ">
            {<RenderLink linkText="My orders" linkIcon={<TbLockCog/>} />}
            {<RenderLink linkText="My info" linkIcon={<GoPerson/>} />}
            {<RenderLink linkText="Sign out" linkIcon={<FaArrowRightFromBracket className="font-normal"/>} />}
        </ul>
    )
}

export default function AccountSideBar() {
  return (
    <div className="grid grid-cols-7 gap-10">
        <aside className="col-span-2 flex flex-col gap-3">
            <SectionHeader str={"Hello Collins"}/>
            <p className="text-[14px] font-normal leading-[33.5px] tracking-[2%] text-textColor-100 ">Welcome to your Account</p>

            <SideBarLinks/>
        </aside>

            <AccountMyOrder/>
    </div>
  )
}
