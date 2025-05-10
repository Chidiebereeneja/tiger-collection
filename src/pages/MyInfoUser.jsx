import React from 'react'
import PageTracker from '../components/PageTracker'
import AccountSideBar from '../components/AccountSideBar'
import MyInfoBody from '../components/MyInfoBody'

export default function MyInfoUser() {
  const prevPage = localStorage.getItem("prev-page")
    return (
      <div className="flex flex-col gap-10 w-full">
          <PageTracker arr={[prevPage, "myinfo"]}/>
  
          <div className="grid grid-cols-7 gap-10 w-full max-w-[1200px] self-center mb-16 ">
              <AccountSideBar/>
              <MyInfoBody/>
          </div>
      </div>
    )
}
