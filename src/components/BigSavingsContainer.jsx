import React from 'react'
import SectionHeader from './SectionHeader'
import BigSavingsCardCon from './BigSavingsCardCon'

export default function BigSavingsContainer() {
  return (
    <section className="w-full max-w-[1200px] self-center flex flex-col gap-10">
        <SectionHeader str={"Big Saving Zone"}/>

       <div className="grid grid-cols-6 gap-3 ">
            <BigSavingsCardCon cardHeader={"Hawaiian Shirts"} cardPara={"Dress up in summer vibe"} percentPara={"UPTO 50% OFF"} imageUrl={"src/assets/images/Hawaiian-Shirts.jpeg"} cardStyle={"h-[420px] relative col-span-2"} btnStyle={"h-[34px] w-[111px] border border-1 rounded-[4px] text-[12px] font-normal leading-[100%] "} isLeft={false} />
            
            <BigSavingsCardCon cardHeader={"Printed T-Shirt"} cardPara={"New Designs Every Week"} percentPara={"UPTO 40% OFF"} imageUrl={"src/assets/images/Printed-T-Shirt.jpeg"}  cardStyle={"h-[420px] relative col-span-2"}  btnStyle={"h-[34px] w-[111px] border border-1 rounded-[4px] text-[12px] font-normal leading-[100%] "} />

            <BigSavingsCardCon cardHeader={"Cargo Joggers"} cardPara={"Move with style & comfort"} percentPara={"UPTO 50% OFF"} imageUrl={"src/assets/images/Cargo-Joggers.jpeg"} isLeft={false} cardStyle={"h-[420px] relative col-span-2"}  btnStyle={"h-[34px] w-[111px] border border-1 rounded-[4px] text-[12px] text-sectionHeaderCol-100 font-normal leading-[100%]"} />

            <BigSavingsCardCon cardHeader={"Urban Shirts"} cardPara={"Live In Confort"} percentPara={"FLAT 60% OFF"} imageUrl={"src/assets/images/Urban-Shirts-men.jpeg"} isLeft={false} cardStyle={"h-[420px] relative col-span-3"} btnStyle={"h-[34px] w-[111px] border border-1 rounded-[4px] text-[12px] text-sectionHeaderCol-100 font-normal leading-[100%]"} />

            <BigSavingsCardCon cardHeader={"Oversized T-Shirts"} cardPara={"Street Style Icon"} percentPara={"FLAT 60% OFF"} imageUrl={"src/assets/images/Oversized-T-Shirts.jpeg"} isLeft={false} cardStyle={"h-[420px] relative col-span-3"} btnStyle={"h-[34px] w-[111px] border border-1 rounded-[4px] text-[12px] text-sectionHeaderCol-100 font-normal leading-[100%]"} />
            
       </div>
    </section>
  )
}
