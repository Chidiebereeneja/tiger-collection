import React from 'react'
import PageTracker from '../components/PageTracker'
import AccountSideBar from '../components/AccountSideBar'

export default function AccountUser() {
  const prevPage = localStorage.getItem("prev-page")
  return (
    <div className="flex flex-col gap-10">
        <PageTracker arr={[prevPage, "Account"]}/>

        <div>
            <AccountSideBar/>
        </div>
    </div>
  )
}
