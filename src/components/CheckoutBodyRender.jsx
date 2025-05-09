import React from 'react'
import BillingDetails from './BillingDetails'
import PaymentMethod from './PaymentMethod'

export default function CheckoutBodyRender({setShipping, states}) {
  return (
    <div>
        <BillingDetails setShipping={setShipping} states={states}/>
        <PaymentMethod/>
    </div>
  )
}
