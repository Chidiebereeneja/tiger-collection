import CheckoutHeader from './CheckoutHeader'
import AcceptCashOnDelivery from './AcceptCashOnDelivery'
import AtmCardPaymentMethod from './AtmCardPaymentMethod'
import Button from './Button'



export default function PaymentMethod() {
  return (
    <div>
      <CheckoutHeader headerStr="Payment Method" isSubTxt={true} subTxt="All transactions are secure and encrypted." />

      <div>
        <AtmCardPaymentMethod/>

        <AcceptCashOnDelivery/>

        <div className="my-8 mb-16">
          <Button contentStr="Pay Now" style="h-[54px] w-[121px] rounded-[8px] bg-purpleCol-100 text-primaryCol-100 text-[18px] font-medium leading-[100%]  " />
        </div>
      </div>
    </div>
  )
}
