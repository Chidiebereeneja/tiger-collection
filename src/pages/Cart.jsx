import React, { useEffect, useState } from 'react'
import PageTracker from '../components/PageTracker'
import CartCard from '../components/CartBody'
import axios from 'axios'

export default function Cart() {
    const [cartData, setCardData] = useState("")
    let prevPage = localStorage.getItem("prev-page")
    
    console.log(prevPage);
    

    if(prevPage === "") {
        prevPage = "/"
    }
        

    const fetchData = async function () {
        try {
            const res = await axios.get("/wishlist.json")
            setCardData(res.data)
            
            
        } catch(err) {
            console.log(err);
            
        }
    }

    useEffect(() => {
        fetchData()
    }, [])
    
    

    
  return (
    <div className="w-full flex flex-col gap-3 justify-center ">
        <div className="w-full max-w-[1200px] self-center">
            <PageTracker arr={[prevPage, "Cart"]}/>
        </div>

        <div className="text-[14px] font-normal leading-[100%] tracking-[2%] text-textColor-100 my-8 flex flex-col gap-2 w-full max-w-[1200px] self-center ">
            <p>Please fill in the fields below and click place order to complete your purchase!</p>

            <p>
                <span>Already registered?</span> 
                <span className="text-purpleCol-100">Please login here</span>
            </p>
        </div>

        <CartCard data={cartData} />
    </div>
  )
}
