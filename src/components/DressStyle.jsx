import React from 'react'
import { IoIosArrowForward, IoIosArrowUp } from 'react-icons/io';
import FilterHeader from './FilterHeader';

export default function DressStyle({dataObj, dressHeader = "Dress Style"}) {
    
  return (
    <ul>
        <FilterHeader str={dressHeader}/>

        <li className="flex flex-col gap-5 w-full p-4 py-6 border-b-[1px] border-feedbackCol-100 " >
            {dataObj && dataObj.slice(0, 9).map((obj) => <button key={obj.id} id={obj.id} className="cursor-pointer flex justify-between items-center text-filterProCol--100" >
                    <span className="text-[15px] font-semibold leading-[100%] " >{obj.name}</span>
                    <IoIosArrowForward className="inline-block"/>
                </button> ) }
        </li>
    </ul>
  )
}
