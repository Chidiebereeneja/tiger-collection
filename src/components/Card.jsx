import React from 'react'
import { SlHeart } from "react-icons/sl";
import { FaArrowRightLong } from "react-icons/fa6";



export default function Card({ imageUrl, name, isHeart = false, isSubPara = false, subPara, isArrow = false, amount}) {
    
  return (
    <div className="h-[313.67px] w-[262.81px]">
        <figure className="h-[70%] w-full rounded-[21.9px] relative">
            <img src={imageUrl} className="h-full w-full object-cover object-center rounded-[21.9px] " alt="" />

           { isHeart ? <SlHeart className="inline-block p-2 bg-primaryCol-100 absolute top-7 right-7 h-[30.36px] w-[30.36px] rounded-[50%] "/> : ""}
        </figure>

        <div>
            <div className="mt-3 px-1">
                <p className="text-[18px] text-sectionHeaderCol-100 leading-[100%] tracking-[1%] font-medium ">{name}</p>
                {isSubPara ? <p>{subPara}</p> : ""}
            </div>
            {isArrow ? <FaArrowRightLong/> : <p>{amount}</p>}
        </div>
    </div>
  )
}

