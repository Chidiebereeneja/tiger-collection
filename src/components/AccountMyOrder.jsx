import React, { useEffect, useState } from 'react'
import SectionHeader from './SectionHeader'
import Button from './Button'
import OrderModalBody from './OrderModalBody'
import axios from 'axios'

const ButtonModal = function({setTargetVal}){

    const handleBtnClick = function(e) {
        const targetEl = e.target
        setTargetVal(targetEl.textContent.trim());
        const siblingsArr = Array.from(targetEl.parentNode.children);

        siblingsArr.map((el) => {
            el.classList.remove("activeAccModal")
            el.classList.add("modalAcctBtn")
        })

        targetEl.classList.add("activeAccModal")
        targetEl.classList.remove("modalAcctBtn")

        
        
    }

    return (
        <ul className="w-full border-b-[1px] border-feedbackCol-100 ">
            <li className="w-full flex items-center justify-between">
                <Button contentStr="Active" style="activeAccModal" onClick={handleBtnClick}/>
                <Button contentStr="Cancelled" style="modalAccBtn" onClick={handleBtnClick}/>
                <Button contentStr="Completed" style="modalAccBtn" onClick={handleBtnClick}/>
            </li>
        </ul>
    )
}

export default function AccountMyOrder() {
    const [targetVal, setTargetVal] = useState("Active")
    const [orderData, setOrderData] = useState("")

    const fetchData = async function() {
        try {
            const res = await axios.get("/alluserorders.json")
            setOrderData(res.data)
        } catch(err) {
            console.log(err);
            
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

  return (
    <aside className="col-span-5 mt-6">
        <SectionHeader str={"My Orders"} isBorder={false} />

        <section className="mt-8 mb-16">
            <ButtonModal setTargetVal={setTargetVal} />
            <OrderModalBody orderData={orderData} targetVal={targetVal}/>
        </section>
    </aside>
  )
}
