import React from 'react'
import Button from './Button'

const WeMadeText = function(){
    return (
        <div className="h-full col-span-1 relative">
            <figure className="relative h-full grow w-full ">
                <img src={"src/assets/images/we_made_it.jpeg"} alt="we made it" className="h-full w-full object-cover object-center" />
                <div className="bg-black top-0 opacity-[0.7] w-full h-full absolute "></div>
            </figure>

            <div className="absolute text-primaryCol-100 top-[20%] left-[15%] flex flex-col gap-6">
                <h1 className="text-[34px] font-normal leading-[50px] tracking-[0.21px] w-[80%] ">WE MADE YOUR EVERYDAY FASHION BETTER!</h1>
                <h4 className="text-[20px] font-normal leading-[130%] tracking-[1px] w-[70%] ">In our journey to improve everyday fashion, tiger collection presents EVERYDAY wear range - Comfortable & Affordable fashion 24/7</h4>

                <Button contentStr={"Shop Now"} style={"bg-primaryCol-100 text-sectionHeaderCol-100 text-[18px] leading-[100%] rounded-[8px] h-[40px] w-[181px] "} />
            </div>
        </div>
    )
}

const WeMadeImage = function() {
    return (
        <figure className="h-full col-span-1 ">
            <img src={"src/assets/images/Rectangle-13.jpeg"} alt="" className="h-full w-full object-cover object-center" />
        </figure>
    )
}

export default function WeMadeContainer() {
  return (
    <div className="h-[600px] w-[100%] bg-amber-600 max-w-[1200px] grid grid-cols-2 grid-rows-1 self-center ">
        <WeMadeText/>
        <WeMadeImage/>
    </div>
  )
}
