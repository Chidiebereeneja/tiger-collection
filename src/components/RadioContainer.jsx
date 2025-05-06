import { useState } from 'react'
import CheckoutHeader from './CheckoutHeader'
import RadioCard from './RadioCard'


export default function RadioContainer() {
    const [sameBillingAdd, setSameBillingAdd] = useState("")
    const [differentBillingAdd, setDifferentBillingAdd] = useState("")

  return (
    <div>
        <div className="border-b-[1px] border-checkoutCol-100 pb-5">
            <CheckoutHeader headerStr={"Shipping Address"} subTxt={"Select the address that matches your card or payment method."} isSubTxt={true}/>

            <div className="bg-searchInputCol-100 py-7 px-5 rounded-[12px]">
                <RadioCard typeStr={"radio"} labelStr={"Same as Billing address"} isBorder={true} strId={"sameBillingAdd"} setValue={setSameBillingAdd}/>

                <RadioCard typeStr={"radio"} labelStr={"Use a different shipping address"} isBorder={false} strId={"differenceBillingAdd"} setValue={setDifferentBillingAdd} />
            </div>

        </div>

        <div className="border-b-[1px] border-checkoutCol-100 pb-5">
            <CheckoutHeader headerStr={"Shipping Method"}/>

            <div className="bg-searchInputCol-100 py-7 px-5 rounded-[12px] ">
                <RadioCard typeStr={"radio"} labelStr={"Arrives by Monday, October 7"} isBorder={true} strId={"sameBillingAdd"} setValue={setSameBillingAdd} isInput={false}/>

                <RadioCard typeStr={"radio"} labelStr={"Use a different shipping address"} isBorder={false} strId={"differenceBillingAdd"} setValue={setDifferentBillingAdd} isInput={false} isSubTxt={true} subTxt={"Additional fess may apply"} isAmount={true} amount={"₦200"} isMargin={false} />
            </div>

        </div>
    </div>
  )
}
