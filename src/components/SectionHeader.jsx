import React from 'react'

export default function SectionHeader({str}) {
  return (
    <div className="border-l-[5px] py-1 border-purpleCol-100 pl-4">
        <h2 className="text-[34px] text-sectionHeaderCol-100 font-normal leading-[33.5px] tracking-[2%] ">{str}</h2>
    </div>
  )
}
