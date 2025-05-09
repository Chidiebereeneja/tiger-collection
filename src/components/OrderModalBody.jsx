import { useEffect, useState } from "react";
const PElement = function({strHeader, strTxt, isOrder = true}){
    const [style, setStyle] = useState("")

    const styleHeader = isOrder ? "text-textColor-100" : "text-sectionHeaderCol-100"

    // const styleTxt = isOrder ? "text-gray-300" : "text-textColor-100"

    useEffect(() => {

        if(isOrder && strTxt === "Completed") {
            setStyle("text-colgreen-220")
        } else if(isOrder && strTxt === "Active") {
            setStyle("text-starCol-100")
        } else if(isOrder && strTxt === "Cancelled") {
            setStyle("text-colred-220")
        } else if(!isOrder) {
            setStyle("text-gray-300")
        } else {
            setStyle("text-textColor-100")
        }
    
    }, [strTxt])


    return (
        <p className={"text-[14px] font-semibold leading-[100%] flex gap-1 " + styleHeader}>
            <span>{strHeader}</span>
            <span className={style}>{strTxt}</span>
        </p>
    )
}

const DivElement = function({firstHeader, secondHeader, firstTxt, secondTxt}){
    return (
        <div className="flex justify-between">
            <PElement strHeader={firstHeader} strTxt={firstTxt} />
            <PElement strHeader={secondHeader} strTxt={secondTxt} />
        </div>
    )
}

const FigureElement = function({obj}){
    const altTxt = obj.image.split("/").slice(-1).join("")

    return (
        <figure className="flex gap-2 border-b-[1px] border-b-checkoutCol-100 pb-5">
            <img src={obj.image} alt={altTxt} className="h-[96px] w-[96px] rounded-[4px] object-cover object-center " />
            <figcaption className="flex flex-col gap-2">
                <p className="text-[18px] font-semibold leading-[100%] text-sectionHeaderCol-100 ">{obj.name}</p>
                    
                <PElement strHeader="Colour :" strTxt={obj.color} isOrder={false} />

                <PElement strHeader="Qty :" strTxt={obj.qty} isOrder={false} />

                <PElement strHeader="Total :" strTxt={obj.amount} isOrder={false} />
            </figcaption>
        </figure>
    )
}

export default function OrderModalBody({ targetVal, orderData }) {
  const [renderData, setRenderData] = useState([]); 

  useEffect(() => {
    const renderDataArr = orderData && orderData.filter((obj) => obj.status === targetVal);
    setRenderData(renderDataArr);
  }, [targetVal, orderData]);

  return (
    <div>
        {
            renderData && renderData.map((obj) => <div className="flex flex-col gap-4">
                <div className="bg-searchInputCol-100 p-6 flex flex-col gap-2  mt-5">
                    <p className="text-[18px] font-semibold leading-[100%] text-sectionHeaderCol-100 ">Order no: {obj["order_id"]}</p>

                    <DivElement firstHeader="Order Date : " firstTxt={obj["order_date"]} secondHeader="Order Status :" secondTxt={obj.status} />

                    <DivElement firstHeader="Estimated Delivery Date : " firstTxt={obj["order_date"]} secondHeader="Payment Method :" secondTxt={obj["payment-method"]} />
                </div>

                <div>
                    <FigureElement obj={{
                        name: obj.name,
                        image: obj.image,
                        color: obj.color,
                        qty: obj.qty,
                        amount: obj.price
                    }} />
                </div>
            </div> )
        }
    </div>
  );
}

