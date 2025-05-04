import React from 'react'

export default function CategoryDescription({dataObj, desHeader}) {
  return (
    <div className="pl-5 flex flex-col gap-4 mt-4">
        <h3 className="text-[20px] text-textColor-100 font-semibold leading-[33.5px] tracking-[2%] ">{desHeader}</h3>

        {
            dataObj && dataObj.map((item) => <p className="text-[17px] font-normal leading-[28.5px] tracking-[2%] text-textColor-100 ">
                {item}
            </p> )
        }
    </div>
  )
}
