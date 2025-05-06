import React from 'react'
import Label from './Label'
import Input from './Input'

export default function GroupInput({arr, setValue}) {
   return (
          < >
              {
                  arr && arr.map((obj) => {
                      return (
                          <div key={obj.id} className={"flex flex-col gap-1"}>
                              <Label str={obj.name} forId={obj.id} styleStr={"text-[16px] font-semibold leading-[100%] tracking-[2%] "}/>
                              <Input typeStr={obj.type} inputId={obj.id} styleInput={"bg-searchInputCol-100 h-[44px] rounded-[8px] outline-none px-2 text-[14px] font-normal leading-[100%] "} placeholder={obj.placeholder} setValue={setValue} />
                          </div>
                      )
                  })
              }
          </>
      )
}
