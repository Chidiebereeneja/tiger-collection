import React from 'react'
import SectionHeader from './SectionHeader.jsx'
import { GoPerson } from "react-icons/go";
import { TbLockCog } from "react-icons/tb";import { FaArrowRightFromBracket } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';


const RenderLink = function({linkText, linkIcon}) {
    const navigate = useNavigate()
    const currentPage = window.location.href.split("/").slice(-1).join("");

    localStorage.setItem("prev-page", currentPage)

    const handleNavigate = function(e) {
        const target = e.target;
        if(target.tagName.toLowerCase() === "li") {
            const elChildren = target.children[1].textContent.split(" ").join("").toLowerCase();
            if(elChildren === "myinfo") {
                console.log(target);
                navigate("/myinfo") 
                
            } else if(elChildren === "myorders") {
                
                console.log(target);
            } else if(elChildren === "signout") {
                
                console.log(target);
            }
            
        } else if(target.tagName.toLowerCase() === "p") {
            const elChildren = target.textContent.split(" ").join("").toLowerCase();
            if(elChildren === "myinfo") {
                console.log(target);
                navigate("/myinfo") 
                
            } else if(elChildren === "myorders") {
                navigate("/myorders")
                
                console.log(target);
            } else if(elChildren === "signout") {
                
                console.log(target);
            }
        } else if(target.tagName.toLowerCase() === "svg") {
            const elChildren = target.nextElementSibling.textContent.split(" ").join("").toLowerCase();
            if(elChildren === "myinfo") {
                console.log(target);
                navigate("/myinfo") 
                
            } else if(elChildren === "myorders") {
                navigate("/myorders")
                
                console.log(target);
            } else if(elChildren === "signout") {
                
                console.log(target);
            }
        }
    }
 
    return (
        <li className="h-[40px] w-[255px] text-[18px] font-semibold leading-[100%] text-textColor-100 border-l-[4px] border-l-transparent transition-all hover:bg-searchInputCol-100 hover:border-sectionHeaderCol-100 flex items-center gap-2 cursor-pointer pl-5" onClick={handleNavigate} >
            {linkIcon}
            <p>{linkText}</p>
        </li>
    )
}

const SideBarLinks = function(){
    return (
        <ul className="flex flex-col gap-2 mt-3 ">
            {<RenderLink linkText="My orders" key={"my order"} linkIcon={<TbLockCog/>} />}
            {<RenderLink linkText="My info" key={"my info"} linkIcon={<GoPerson/>} />}
            {<RenderLink linkText="Sign out" key={"sign out"} linkIcon={<FaArrowRightFromBracket className="font-normal"/>} />}
        </ul>
    )
}

export default function AccountSideBar() {
  return (
    <aside className="col-span-2 flex flex-col gap-3">
        <SectionHeader str={"Hello Collins"}/>
        <p className="text-[14px] font-normal leading-[33.5px] tracking-[2%] text-textColor-100 ">Welcome to your Account</p>

        <SideBarLinks/>
    </aside>
  )
}
