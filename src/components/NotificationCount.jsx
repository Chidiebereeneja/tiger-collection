import React from 'react'

export default function NotificationCount({count}) {
  return (
    <span className="bg-greenNotifyCol-100 h-[10px] w-[10px] text-[5px] font-semiBold absolute rounded-[50%] top-1 right-1 flex items-center justify-center text-primaryCol-100 font-bold leading-[100%]  ">{count}</span>
  )
}
