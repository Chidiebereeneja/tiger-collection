import React from 'react'
import { IoIosArrowUp } from 'react-icons/io'
import FilterHeader from './FilterHeader'

export default function FilterByColor({colorData, isHeader = true}) {

  const colorStyle = isHeader ? "h-[33.73px] w-[33.73px] rounded-[12px] bg-col place-self-center cursor-pointer" : "h-[20px] w-[20px] rounded-[12px] bg-col place-self-center cursor-pointer"
    
  return (
    <div className={isHeader ? "border-b-[1px] border-feedbackCol-100" : " "}>
        {isHeader ? <FilterHeader str={"Colors"}/> : ""}

         <ul className={isHeader ? "grid grid-cols-4 p-5 justify-items-center gap-y-4": "flex gap-3"}>
            {colorData && colorData.slice(0, 12).map((obj) => <li className="flex flex-col gap-1" key={obj.name} id={obj.name} >

                <p className={`${obj.name.toLowerCase()} ${colorStyle} `}></p>
                
                { isHeader ? <p className="text-[13px] text-filterProCol--100 font-semibold leading-[100%] place-self-center ">{obj.name}</p>  : ""}
            </li> )}
         </ul>
    </div>
  )
}
