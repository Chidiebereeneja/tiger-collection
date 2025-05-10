import React from 'react'
import AccountMyOrder from '../components/AccountMyOrder'
import AccountSideBar from '../components/AccountSideBar'
import PageTracker from '../components/PageTracker'

export default function MyOrders() {
    const prevPage = localStorage.getItem("prev-page")
  return (
    <div className="flex flex-col gap-10">
            <PageTracker arr={[prevPage, "MyOrders"]}/>
    
        <div className="grid grid-cols-7 gap-10">
            <AccountSideBar/>
            <AccountMyOrder/>
        </div>
                
    </div>
  )
}
