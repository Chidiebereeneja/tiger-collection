import React, { useEffect, useState } from 'react'

const statePrice = [
    {
        id: 1,
        state: "Enugu",
        amount: 100
    },
    {
        id: 2,
        state: "Imo",
        amount: 2000
    },
    {
        id: 3,
        state: "Lagos",
        amount: 6800
    },
    {
        id: 4,
        state: "Kaduna",
        amount: 4000
    },
    {
        id: 5,
        state: "Abuja",
        amount: 7200
    }
]

const CalculationCard = function({obj, isItems = false}) {
    return (
        <li className="list-none p-4">
            <div className="flex justify-between">
                <p className="flex gap-2 font-bold text-[18px] leading-[100%] tracking-[2%] ">
                    <span>{obj.name}</span>
                    <span className="text-textColor-100 ">{ isItems ? `( ${obj.totalProduct} items )` : obj.totalProduct  }</span>
                </p>
                <p className="flex gap-2 font-bold text-[18px] leading-[100%] tracking-[2%]">₦{obj.amount}</p>
            </div>
        </li>
    )
}

export default function SummaryCalculation({total, data, shipping, setGrandTotal, grandtotal})
 {

     
     
     const [renderShipping] = statePrice && statePrice.filter((obj) => obj.state === shipping)

     useEffect(() => {
        setGrandTotal(total + (renderShipping?.amount || 0))
     }, [renderShipping, total])
    

  return (
    <div className="flex flex-col">
        <CalculationCard isItems={true} obj={{
            name: "Subtotal",
            totalProduct: data.length,
            amount: total
        }}/>

        <CalculationCard obj={{
            name: "Shipping",
            amount: renderShipping?.amount || "0.00"
        }}/>

        <CalculationCard obj={{
            name: "Total",
            amount: grandtotal
        }}/>
    </div>
  )
}
