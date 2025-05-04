import React from 'react'
import PageTracker from '../components/PageTracker'

export default function Cart() {
  return (
    <div>
        <PageTracker arr={["Home", "Add To Cart"]}/>

        <div className="text-[14px] font-normal leading-[100%] tracking-[2%] text-textColor-100 my-8 flex flex-col gap-2 ">
            <p>Please fill in the fields below and click place order to complete your purchase!</p>

            <p>
                <span>Already registered?</span> 
                <span className="text-purpleCol-100">Please login here</span>
            </p>
        </div>
    </div>
  )
}
