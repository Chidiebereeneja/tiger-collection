import React from 'react'

export default function CheckoutHeader({headerStr, subTxt, isSubTxt = false, subTxtChild, isSubTxtChild =false}) {
  return (
    <div className="my-4">
        <h3 className="font-normal text-[20px] leading-[33.5px] tracking-[2%] text-sectionHeaderCol-100 ">{headerStr}</h3>
        {isSubTxt ? <p className="font-normal text-[16px] leading-[100%] mt-1 text-sectionHeaderCol-100 ">
            <span>{subTxt}</span>
            {isSubTxtChild ? <span>{subTxtChild}</span> : "" }
        </p> : ""}
    </div>
  )
}
