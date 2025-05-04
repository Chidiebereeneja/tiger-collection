import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';
import { MdOutlineSettingsInputComposite } from "react-icons/md";
import FilterHeader from './FilterHeader';

export default function FilterByType({filterData}) {
  return (
    <ul className="flex flex-col" >
        <FilterHeader str={"Filter"}/>
        

        <li className="flex flex-col gap-5 w-full p-4 py-6 border-b-[1px] border-feedbackCol-100 " >
        {filterData && filterData.map((obj) => <button key={obj.id} id={obj.id} className="cursor-pointer flex justify-between items-center text-filterProCol--100" >
                <span className="text-[15px] font-semibold leading-[100%] " >{obj.name}</span>
                <IoIosArrowForward className="inline-block"/>
            </button> ) }
        </li>

    </ul>
  )
}
