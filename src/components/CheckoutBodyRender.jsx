import React from 'react'
import BillingDetails from './BillingDetails'
import PaymentMethod from './PaymentMethod'

export default function CheckoutBodyRender({setShipping}) {
  return (
    <div>
        <BillingDetails setShipping={setShipping}/>
        <PaymentMethod/>
    </div>
  )
}
