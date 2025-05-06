import React, { useEffect, useState } from 'react'

export default function SummaryCard({obj, setTotal}) {

    const [subTotal, setSubTotal] = useState(+obj.qty * +obj.price)
    
    useEffect(() => {
        setTotal((prev) => prev + subTotal)
    }, [subTotal])

    const altText = obj?.image?.split("/")?.slice(-1)?.join("")

  return (
        <React.Fragment>
            <li className={"flex justify-between border-b-[1px] border-checkoutCol-100 py-3 "}>
                <figure className="flex gap-2">
                    <img src={obj.image} alt={altText} className="h-[63px] w-[63px] object-cover object-center rounded-[4px] " />

                    <figcaption className="flex flex-col gap-1">
                        <p className="summaryCardStyle">
                            <span>{obj.name}</span>
                            <span className="text-textColor-100">x{obj.qty}</span>
                        </p>
                        <p className="summaryCardStyle">
                            <span>Color:</span>
                            <span className="text-textColor-100">{obj.color}</span>
                        </p>
                    </figcaption>
                </figure>

                <p className="font-bold text-[13px] leading-[100%] tracking-[2%] text-textColor-100 ">₦{subTotal}</p>
            </li>
        </React.Fragment>
    )
}
