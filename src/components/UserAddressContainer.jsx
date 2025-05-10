import React from 'react'
import Button from './Button'

const AddressCard = function({obj}) {
    return (
        <div className="bg-searchInputCol-100 col-span-2 min-h-[252px] px-6 rounded-[12px] py-4 flex flex-col gap-4">
            <p className="text-[20px] font-semibold leading-[100%] text-sectionHeaderCol-100 ">{obj.name}</p>
            <p className="text-[16px] font-medium leading-[100%] text-textColor-100">{obj.phone}</p>
            <p className="text-[16px] font-medium leading-[137%] text-textColor-100">{obj.address}</p>

            <div className="flex items-center gap-3 mt-2 ">
                <Button contentStr="Home" style="h-[34px] border border-textColor-100 flex items-center px-2 rounded-[8px] text-[16px] font-medium leading-[100%] text-textColor-100 " />
                <Button contentStr="Default billing address" style="h-[34px] border border-textColor-100 flex items-center px-2 rounded-[8px] text-[16px] font-medium leading-[100%] text-textColor-100" />
            </div>

            <div className="flex gap-7 mt-4 ">
                <Button contentStr="Remove" style="font-semibold text-[16px] leading-[100%] text-sectionHeaderCol-100"/>

                <Button contentStr="Edit" style="font-semibold text-[16px] leading-[100%] text-sectionHeaderCol-100"/>

                <Button contentStr="Set as default" style="font-semibold text-[16px] leading-[100%] text-sectionHeaderCol-100"/>
            </div>
        </div>
    )
}

export default function UserAddressContainer({data}) {
  return (
    <div className="grid grid-cols-4 gap-5">
        {data && data.map((obj) => <AddressCard key={obj.id} obj={obj} />)}
    </div>
  )
}
