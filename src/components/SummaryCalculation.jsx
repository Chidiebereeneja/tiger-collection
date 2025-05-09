import React, { useEffect} from 'react'

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

export default function SummaryCalculation({total, data, shipping, setGrandTotal, grandtotal, states})
 {

     
     
     const [renderShipping] = states && states.filter((obj) => obj.name === shipping)
     console.log(states, shipping);
     

     useEffect(() => {
        setGrandTotal(total + (renderShipping?.["shipping_amount"] || 0))
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
            amount: renderShipping?.["shipping_amount"] || "0.00"
        }}/>

        <CalculationCard obj={{
            name: "Total",
            amount: grandtotal
        }}/>
    </div>
  )
}
