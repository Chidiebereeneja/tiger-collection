import React, { useEffect, useState } from 'react'
import PageTracker from '../components/PageTracker'
import SectionHeader from '../components/SectionHeader'
import CheckoutBodyRender from '../components/CheckoutBodyRender'
import OrderSumary from '../components/OrderSumary'
import axios from 'axios'

export default function Checkout() {
  const [prevPage, setPrevPage] = useState(localStorage.getItem("prev-page"))
  const [shipping, setShipping] = useState(0)
  const [stateData, setStateDate] = useState("")
  const [selectedId, setSelectedId] = useState("0.00")


  const fetchData = async function(){
    try {
      const res = await axios.get("/statesinnigeria.json")
      setStateDate(res.data)
    } catch (err) {
      console.log(err);
      
    }
    
  }

  console.log(selectedId);
  

  useEffect(() => {
    fetchData()
  }, [])

  if(prevPage === "") {
      setPrevPage("/")
  }

  return (
    <div className="w-full flex flex-col gap-9">
        <PageTracker arr={[prevPage, "Cart", "Checkout"]}/>

        <div className="w-full grid grid-cols-3 gap-10 max-w-[1200px] self-center ">
           
            <div className="col-span-2">
                <SectionHeader str="Check Out" />
                <CheckoutBodyRender setShipping={setShipping} states={stateData}/>
            </div>

            <OrderSumary shipping={shipping} states={stateData} />

        </div>
    </div>
  )
}
