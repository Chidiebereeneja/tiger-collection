import React, { useState } from 'react'
import Label from './Label'
import Input from './Input'
import Button from './Button'

const InputContainer = function({labelStr, inputType, inputId, setValue}) {
    return (
        <div className="flex flex-col gap-[7px]">
            <Label str={labelStr} forId={inputId} styleStr="font-semibold text-[18px] leading-[100%] tracking-[2%] text-sectionHeaderCol-100 " />
            <Input typeStr={inputType} inputId={inputId} styleInput="bg-searchInputCol-100 h-[50px] rounded-[8px] px-4 outline-none" setValue={setValue} isSetValue={false} />
        </div>
    )
}

export default function ChangePasswordPopup() {
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
  return (
    <form className="h-[521px] flex flex-col gap-7 shadow-2xl w-[476px] px-10 py-8 absolute top-[-5%] right-[5%] bg-primaryCol-100 rounded-[8px] hidden ">
        <InputContainer labelStr="Enter Old Password" inputType="text" inputId="oldpassword" setValue={setOldPassword}/>

        <InputContainer labelStr="Enter New Password " inputType="text" inputId="newpassword" setValue={setNewPassword}/>

        <InputContainer labelStr="Re-enter New Password" inputType="text" inputId="re-enterpassword"/>

        <div className="flex gap-4 justify-end col-span-4 px-10 mt-9">
            <Button contentStr="Cancel" style=" bg-searchInputCol-100 h-[48px] w-[152px] rounded-[8px] font-bold leading-[100%] text-[18px] text-textCol-100 text-textColor-100 " />
            <Button contentStr="Save Changes" style=" bg-purpleCol-100 h-[48px] w-[226px] rounded-[8px] font-semibold leading-[100%] text-[18px] text-textCol-100 text-primaryCol-100 "  />
        </div>
    </form>
  )
}
