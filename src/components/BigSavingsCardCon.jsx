import React from 'react'
import { HiArrowDown } from "react-icons/hi";
import Button from './Button';


export default function BigSavingsCardCon({isLeft = true, cardHeader, cardPara, percentPara, imageUrl, btnStyle, nextPage, cardStyle}) {

    const textStlye = isLeft ? "absolute top-4 left-4 text-primaryCol-100 flex flex-col justify-center gap-10 h-full " : "absolute top-4 right-4 text-sectionHeaderCol-100 flex flex-col items-end  gap-10 h-full justify-center "

    
  return (
    <div className={cardStyle}>

      <div className={textStlye}>
        <div className={isLeft ? "flex flex-col gap-3" : "flex flex-col items-end gap-3"}>
          <h3 className="text-[32px] font-normal tracking-[2%] leading-[43.92px] w-[60%] text-center">{cardHeader}</h3>
          <p className="text-[14px] leading-[100%] font-normal ">{cardPara}</p>
          <p className="text-[18px] font-normal leading-[100%] ">{percentPara}</p>
        </div>
        <HiArrowDown className={isLeft ? "ml-10" : "mr-11"}/>

        <Button contentStr={"SHOP NOW"} style={btnStyle} navigationPage={nextPage} />
      </div>
  
      <figure className="h-full w-full">
        <img src={imageUrl} alt="Big savings" className="h-full w-full object-cover object-center " />
      </figure>
    </div>
  )
}
