import React, { useState } from 'react'
import Label from './Label'
import Input from './Input'
import Button from './Button'


const InputContainer = function({typeStr, inputStr, labelStr, setValue}) {
    return (
        <div className="flex flex-col gap-[7px] w-[50%]">
            <Label str={labelStr} styleStr="font-semibold text-[18px] leading-[100%] tracking-[2%] text-sectionHeaderCol-100 " />
            <Input typeStr={typeStr} placeholder={inputStr} styleInput="bg-searchInputCol-100 h-[45.71px] px-4 rounded-[8px] text-[16px] font-normal leading-[100%] text-textColor-100 outline-none " setValue={setValue} />
        </div>
    )
}
export default function ChangeAddressPopup({ref, data}) {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [phonNum, setPhoneNum] = useState("")
    const [email, setEmail] = useState("")
    const obj = data && data[0]

  return (
    <form ref={ref} className="grid grid-cols-4 gap-6 h-[457px] w-full shadow-2xl rounded-[20px] box-border absolute top-[-10%] left-[-2%]  bg-primaryCol-100 pb-10 hidden">
        {
            <React.Fragment>
                <div className="col-span-4 h-[129px] bg-searchInputCol-100 flex flex-col gap-1 px-11 py-7 rounded-t-[20px] ">
                    <h3 className="text-[28px] leading-[33.5px] font-bold tracking-[2%] text-sectionHeaderCol-100 ">{obj.name}</h3>
                    <p className="text-[18px] leading-[100%] font-medium tracking-[2%] text-sectionHeaderCol-100 ">{obj.email}</p>
                </div>

                <div className="col-span-4 flex gap-6 px-10">
                    <InputContainer typeStr="text" labelStr="First Name" inputStr={obj?.name?.split(" ")[0]} setValue={setFirstname} />

                    <InputContainer typeStr="text" labelStr="Last Name" inputStr={obj?.name?.split(" ")[1]} setValue={setLastname} />
                </div>

                <div className="col-span-4 flex gap-6 px-10">
                    <InputContainer typeStr="email" labelStr="Email Address" inputStr={obj?.email} setValue={setEmail} />

                    <InputContainer typeStr="text" labelStr="Phone Number" inputStr={obj?.phone} setValue={setPhoneNum} />
                </div>

                <div className="flex gap-4 justify-end col-span-4 px-10">
                    <Button contentStr="Cancel" style=" bg-searchInputCol-100 h-[48px] w-[152px] rounded-[8px] font-bold leading-[100%] text-[18px] text-textCol-100 text-textColor-100 " />
                    <Button contentStr="Save Changes" style=" bg-purpleCol-100 h-[48px] w-[226px] rounded-[8px] font-semibold leading-[100%] text-[18px] text-textCol-100 text-primaryCol-100 "  />
                </div>
            </React.Fragment> 
        }
    </form>
  )
}
