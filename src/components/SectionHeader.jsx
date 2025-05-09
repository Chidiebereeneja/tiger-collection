import React from 'react'

export default function SectionHeader({str, isBorder = true}) {
  return (
    <div className={isBorder ? "border-l-[5px] py-1 border-purpleCol-100 font-medium pl-4 text-sectionHeaderCol-100 text-[30px]" :  "text-[28px] font-normal"}>
        <h2 className="leading-[33.5px] text-sectionHeaderCol-100 tracking-[2%] ">{str}</h2>
    </div>
  )
}
