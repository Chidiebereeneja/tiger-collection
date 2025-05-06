import Button from './Button'
import { useNavigate } from 'react-router-dom'

const CouponHeader = function() {
    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-[24px] font-semibold leading-[100%] text-sectionHeaderCol-100 " >Discount  Codes</h2>
            <p className="text-[16px] font-normal leading-[100%] text-textColor-100 ">Enter your coupon code if you have one</p>
        </div>
    )
}

const CouponForm = function(){
    return (
        <div className="h-[40px] flex items-center ">
            <input type="text" className="h-full border border-feedbackCol-100 rounded-l-[12px] outline-none py-1 px-2" />
            <Button contentStr={"Apply Coupon"} style={"bg-purpleCol-100 h-full w-[161px] rounded-r-[12px] border border-feedbackCol-100 border-l-[0px] text-[16px] font-semibold leading-[100%] text-primaryCol-100 "} />
        </div>
    )
}

const DiscountCoupon = function() {
    const navigate = useNavigate();

    const handleBtnEvent = function() {
        const url = localStorage.getItem("prev-page")
        navigate(`/${url}`)
    }

    return (
        <div className="flex flex-col gap-8">
            <CouponHeader/>
            <CouponForm/>
            <Button contentStr={"Continue Shopping"} style={"h-[44px] w-[232px] rounded-[8px] border border-feedbackCol-100 bg-primaryCol-100 text-[16px] font-semibold leading-[100%] text-sectionHeaderCol-100  "} onClick={handleBtnEvent} />
        </div>
    )
}

const CostRender = function({str, amount, stylAttr}) {
    return (
        <p className={"flex items-center justify-between text-[20px] w-full tracking-[2%] gap-3" + stylAttr}>
            <span className="grow">{str}</span>
            <span className="grow">₦{amount}</span>
        </p>
    )
}


const TotalProductCost = function({subTotal}) {

    const navigate = useNavigate()

    const handleProceedBtn = function() {
        navigate("/checkout")
    }
    
    return (
        <div className="bg-grandCol-100 h-full w-[365px] flex flex-col items-center">
            <div className=" flex flex-col w-full gap-[2px] px-14 pb-4 pt-3 border-b-[1px] border-feedbackCol-100 ">
                <CostRender str={"Grand Total"} amount={subTotal} stylAttr={" mt-3 font-bold text-sectionHeaderCol-100 "} />
            </div>

            <Button contentStr={"Proceed To Checkout"} style={"h-[46px] w-[232px] rounded-[8px] bg-purpleCol-100 font-semibold mt-16 text-primaryCol-100 text-[17px] leading-[100%] "} onClick={handleProceedBtn} />
        </div>
    )
}

export default function CalculateTotal({getSubTotal}) {
    
  return (
    <div className="w-full self-center bg-searchInputCol-100 h-[338px] py-6 ">
        <div className="w-full max-w-[1200px] h-full justify-self-center flex justify-between">
            <DiscountCoupon/>
            <TotalProductCost subTotal={getSubTotal}/>
        </div>
    </div>
  )
}

