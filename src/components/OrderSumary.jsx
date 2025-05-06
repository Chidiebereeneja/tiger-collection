import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SummaryCalculation from './SummaryCalculation'
import SummaryCard from './SummaryCard'

// const SummaryCard = function({obj, isCalcRender = false, setTotal}){
//     const [subTotal, setSubTotal] = useState(+obj.qty * +obj.price)

//     useEffect(() => {
//         setTotal((prev) => prev + subTotal)
//     }, [subTotal])

//     const altText = obj.image.split("/").slice(-1).join("")

//     return (
//         <React.Fragment>
//             {!isCalcRender ? (
//                 <li className={"flex justify-between border-b-[1px] border-checkoutCol-100 py-3 "}>
//                     <figure className="flex gap-2">
//                         <img src={obj.image} alt={altText} className="h-[63px] w-[63px] object-cover object-center rounded-[4px] " />

//                         <figcaption className="flex flex-col gap-1">
//                             <p className="summaryCardStyle">
//                                 <span>{obj.name}</span>
//                                 <span className="text-textColor-100">x{obj.qty}</span>
//                             </p>
//                             <p className="summaryCardStyle">
//                                 <span>Color:</span>
//                                 <span className="text-textColor-100">{obj.color}</span>
//                             </p>
//                         </figcaption>
//                     </figure>

//                     <p className="font-bold text-[13px] leading-[100%] tracking-[2%] text-textColor-100 ">₦{subTotal}</p>
//                 </li>
//             ) : (
//                 <li>
//                     <div>
//                         <p>
//                             <span>Subtotal</span>
//                             <span>{obj.totalProduct}</span>
//                         </p>
//                         <p>₦{obj.amount}</p>
//                     </div>
//                 </li>
//             )}
//         </React.Fragment>
//     )
// }

const OrderSummaryCard = function({data, setTotal}){

    return (
        <ul className="flex flex-col gap-6">
            {
                data && data.map((obj) => <SummaryCard obj={obj} setTotal={setTotal} />)
            }
        </ul>
    )
}

export default function OrderSumary({shipping}) {
    const [summaryData, setSummaryData] = useState("")
    const [total, setTotal] = useState(0)
    const [grandtotal, setGrandTotal] = useState(0)

    const fetchData = async function() {
        try {
            const res = await axios.get("/wishlist.json")
            setSummaryData(res.data)
        } catch(err) {
            console.log(err);
            
        }
    }

    useEffect(() => {
        fetchData()
    }, [])


  return (
    <div className="col-span-1 shadow rounded-[8px]  border border-feedbackCol-100 h-fit py-6 px-4 ">
        <h2 className="font-medium text-[24px] leading-[100%] text-sectionHeaderCol-100 mb-5 ">Order Summary</h2>


        <OrderSummaryCard data={summaryData} setTotal={setTotal}/>

        <SummaryCalculation total={total} data={summaryData} shipping={shipping} setGrandTotal={setGrandTotal} grandtotal={grandtotal} />

    </div>
  )
}
