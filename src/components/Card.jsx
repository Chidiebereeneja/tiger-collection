import React from 'react'
import { SlHeart } from "react-icons/sl";
import { FaArrowRightLong } from "react-icons/fa6";
import { TbCurrencyNaira } from "react-icons/tb";




export default function Card({ imageUrl, name, isHeart = false, isSubPara = false, subPara, isArrow = false, amount, isHeight, formatText = false}) {


  const height = isHeight ? "h-[393.26px] w-[270.36px]" : "h-[313.67px] w-[262.81px]";

  const textFormatTask = (str) => {
     const txtFormat = str.split(" ").slice(0, 3)
     const txtRender = txtFormat.length <= 2 ? txtFormat.join(" ") : `${txtFormat.join(" ")}...`

    return txtRender
    
  }

    
  return (
    <div className={height}>
        <figure className="h-[70%] w-full rounded-[21.9px] relative">
            <img src={imageUrl} className="h-full w-full object-cover object-center rounded-[21.9px] " alt="" />

           { isHeart ? <SlHeart className="inline-block p-2 bg-primaryCol-100 absolute top-7 right-7 h-[30.36px] w-[30.36px] rounded-[50%] "/> : ""}
        </figure>

        <div className="flex items-center justify-between">
            <div className="mt-3 px-1">
                <p className={formatText ? "text-[15px] text-sectionHeaderCol-100 leading-[100%] tracking-[1%] font-semibold  " : "text-[18px] text-sectionHeaderCol-100 leading-[100%] tracking-[1%] font-medium "}>{formatText ? textFormatTask(name) : name}</p>
                
                {isSubPara ? <p className="text-[13.41px] font-normal leading-[27.93px] tracking-[-4%] text-arrowCol-100 cursor-pointer">{subPara}</p> : ""}
            </div>
            {isArrow ? <FaArrowRightLong className="inline-block text-arrowCol-100 cursor-pointer"/> : <p className={ formatText ? "bg-searchInputCol-100 text-sectionHeaderCol-100  w-fit p-2 rounded-[8px] text-[14px] flex items-center gap-0 font-semibold leading-[100%]" : " "}> {formatText ? ( <TbCurrencyNaira  className="inline-block text-[19px]"/>) : ""}{amount}</p>}
        </div>
    </div>
  )
}

