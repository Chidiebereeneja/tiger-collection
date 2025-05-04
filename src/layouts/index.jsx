// import { Outlet } from 'react-router'
import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";
import { LiaTimesSolid } from "react-icons/lia";
import PopUpNavBar from '../components/PopUpNavBar';
import AppFooter from '../components/AppFooter';



const NotificationBar = function(){
  // const navigate = useNavigate();

  const handleClick = function(e) {
    const url = window.location.href = "/menproducts"

    e.target.tagName.toLowerCase() === "button" && url ;

    e.target.tagName.toLowerCase() === "svg" && url;
    
  }

  return (
    <div className="h-[40px] bg-topbrandCol-100 w-full flex justify-end pr-10 transition-all">
      <div className="flex justify-between items-center h-full w-[70%]">
        <div onClick={handleClick} className="flex items-center gap-4 text-notificationCol-100">
          <img src={"src/assets/images/Vector.png"} alt="vector" className="h-[24px] w-[24px] object-contain object-center " />
          <p className="text-[14px] font-semibold leading-[22px] ">30% off men’s wear — Limited time!</p>
          <button className="h-[24px] w-fit text-[14px] flex items-center gap-[6px] border-b-[1.5px] cursor-pointer">Shop Now <FaArrowRightLong className="inline-block tex-[14px]" /> </button>
        </div>

        <button className="justify-self-end text-notificationCol-100">
          <LiaTimesSolid className="inline-block cursor-pointer" />
        </button>
      </div>
    </div>
  )
}

export default function MainWebLayout() {
  const currentPageUrl = window.location.href;
  const [timeoutCheck, setTimeoutCheck] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTimeoutCheck(true)
      
    }, 5000);

    return () => clearTimeout(timeout);
  }, [])

  

  return (
    <div className="relative">
      
      
      {timeoutCheck ? (currentPageUrl.endsWith("/") ? <NotificationBar/> : "") : "" }

      <header className='h-[98px] bg-primaryCol-100'>
        <NavBar/>
      </header>
        <PopUpNavBar imageUrl={"src/assets/images/Vector_1.png"} msgHeader={"Product Success"} msgDescrip={"Your product has been added to Cart."} style={"greenNotifyCol-100"} isHidden={true} />
      <Outlet/>

      <AppFooter/>
    </div>
  ) 
}
