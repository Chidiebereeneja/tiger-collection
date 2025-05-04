import React from 'react'
import { IoIosArrowUp } from 'react-icons/io'
import Button from './Button';

export default function FilterBySize({data, isHeader = true}) {

    const handleClick = function(e) {
        e.target.classList.toggle("active-color");
        
    }

    const style = isHeader ? "grid grid-cols-4 gap-3 p-4 py-7" : "flex gap-2";

    const btnStyle = isHeader ? "h-[30px] min-w-[54px] rounded-[8px] border-[1px] border-feedbackCol-100 text-[14px] font-semibold leading-[100%]" : "h-[28px] min-w-[38px] rounded-[10px] border-[1px] border-feedbackCol-100 text-[13px] font-medium leading-[100%] px-1 ";
 
    
  return (
    <div className="w-full" >
        { isHeader ?  <h3 className="p-4 py-6 border-b-[1px] text-textColor-100 border-feedbackCol-100 flex items-center justify-between ">
            <span className="text-[22px] font-semibold leading-[100%] tracking-[2%] ">Size</span>
            <IoIosArrowUp className="inline-block text-[26px] font-extrabold leading-[100%] tracking-[2%]"/>
        </h3> : " "}

         <ul className={ isHeader ? " border-b-[1px] border-feedbackCol-100 " : " "}>
            <li className={style}>
                {data && data.map((item) => <Button key={item} contentStr={item} onClick={handleClick} style={btnStyle} />)}
            </li>
         </ul>
    </div>
  )
}
