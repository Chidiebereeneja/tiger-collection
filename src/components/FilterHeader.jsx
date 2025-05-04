import React from 'react'
import { IoIosArrowUp } from 'react-icons/io'

export default function FilterHeader({str}) {
  return (
    <h3 className="p-4 py-6 border-b-[1px] text-textColor-100 border-feedbackCol-100 flex items-center justify-between ">
                <span className="text-[22px] font-semibold leading-[100%] tracking-[2%] ">{str}</span>
                <IoIosArrowUp className="inline-block text-[26px] font-extrabold leading-[100%] tracking-[2%]"/>
            </h3>
  )
}
