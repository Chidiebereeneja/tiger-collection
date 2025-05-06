import CartCardBody from "./CartCardBody";
import CalculateTotal from "./CalculateTotal";
import { useState } from "react";

const PElRender = function({str, isSpan = false, elStyle = ""}) {
    const pStyle = isSpan ? "col-span-3" : ""
    return <p className={pStyle + elStyle}>{str}</p>
}


export default function CartBody({data}) {
  const [getSubTotal, setGetSubTotal] = useState(0)

  return (
    <div className="w-full flex flex-col justify-center self-center">
      <div className="w-full grid grid-cols-1 place-items-center mb-10 ">

        <div className="w-full flex justify-center bg-topbrandCol-100">
          <div className="grid grid-cols-7 gap-2 w-full max-w-[1200px] h-[76px] place-content-center text-primaryCol-100">

            <PElRender str={"Product Details"} isSpan={true}/>
            <PElRender str={"Price"} />
            <PElRender str={"Quantity"} />
            <PElRender str={"subtotal"} />
            <PElRender str={"action"} />
          </div>
        </div>

  
        <div className="w-full max-w-[1200px]">
          {data && data.map((obj, i) => <CartCardBody key={obj.id}  index={i} data={data} obj={obj} setGetSubTotal={setGetSubTotal} getSubTotal={getSubTotal}  />)}
        </div>
      </div>
        <CalculateTotal getSubTotal={getSubTotal}/>

    </div>
  )
}
