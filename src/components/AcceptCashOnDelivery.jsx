import React from 'react'
import RadioCard from './RadioCard'

export default function AcceptCashOnDelivery() {
  return (
    <div className="bg-searchInputCol-100 pt-5 pb-3 px-5 flex flex-col rounded-b-[12px]">
        <div className="border-b border-feedbackCol-100 pb-4 ">
            <RadioCard typeStr="radio" labelStr="Cash on delivery" subTxt="Pay with cash upon delivery." isSubTxt={true} />
        </div>
        <div className="pt-4 pb-4">
            <RadioCard typeStr="radio" labelStr="Visa Card"/>
        </div>
    </div>
  )
}   
