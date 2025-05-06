import React from 'react'
import PageTracker from '../components/PageTracker'
import AccountSideBar from '../components/AccountSideBar'

export default function AccountUser() {
  return (
    <div>
        <PageTracker arr={[ "Account"]}/>

        <div>
            <AccountSideBar/>
        </div>
    </div>
  )
}
