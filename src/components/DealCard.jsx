import React from 'react'

export default function DealCard({imgUrl, subHeaderTxt, headerTxt}) {
  return (
    <div className="relative w-[604.9px] h-[355.8px] rounded-[12px] shadow-[2px 2px 10px] shadow-shadowColor-100 ">
      <div className="absolute left-5 top-8 flex flex-col justify-around h-[80%]">
        <h6 className="text-[18px] font-bold leading-[30.07px] tracking-[0.25px`] text-primaryCol-100 ">{subHeaderTxt}</h6>
        <div>
          <h2 className="text-[30px] text-primaryCol-100 font-normal leading-[45.1px] w-[80%] ">{headerTxt}</h2>
          <h3 className="text-[16px] leading-[25.06px] tracking-[0.25px] font-normal text-primaryCol-100 ">UPTO 50% OFF</h3>
        </div>
        <a href="" className="text-[20px] leading-[30.13px] font-normal text-primaryCol-100 underline cursor-pointer ">Explore Items</a>
      </div>

      <figure className="w-full h-full">
        <img src={imgUrl} alt="" className="w-full h-full object-cover object-center rounded-[12px] shadow shadow-shadowColor-100" />
      </figure>
    </div>
  )
}
