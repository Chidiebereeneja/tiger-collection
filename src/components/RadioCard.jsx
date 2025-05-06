import React from 'react'
import Label from './Label'
import Input from './Input'

export default function RadioCard({typeStr, labelStr, isBorder, strId, setValue, subTxt, isSubTxt = false, amount, isAmount = false, isInput = true, isMargin = true}) {
 return (
         <div className={isBorder ? "flex flex-col gap-[5px] accent-sectionHeaderCol-100 border-b py-4 px-2 border-feedbackCol-100 bg-searchInputCol-100" : "flex flex-col gap-[5px] accent-sectionHeaderCol-100 bg-searchInputCol-100  py-4 px-2 "}>
             <div className="flex gap-1 justify-between items-center">
                 <div className="flex gap-1 items-center">
                     {isInput ? <Input typeStr={typeStr} styleInput={"mr-3"} inputId={strId} setValue={setValue} /> : "" }
                     <Label str={labelStr} forId={strId} styleStr={"text-sectionHeaderCol-100 font-bold text-[17px] leading-[100%]"} />
                 </div>
                 { isAmount ? <p className="text-sectionHeaderCol-100 font-bold text-[17px] leading-[100%] justify-items-end">{amount}</p> : ""}
             </div>
             {isSubTxt ? <p className={ isMargin ? "text-[15px] font-medium leading-[100%] ml-7 text-textColor-100 " : "text-[15px] font-medium leading-[100%] text-textColor-100 "}>{subTxt}</p> : ""}
         </div>
     )
}
