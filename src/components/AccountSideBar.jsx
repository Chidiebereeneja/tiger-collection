import React from 'react'
import SectionHeader from './SectionHeader.jsx'

const RenderLink = function({linkText, linkIcon}) {
    return (
        <li>
            {/* {linkIcon} */}
            <p>{linkText}</p>
        </li>
    )
}

const SideBarLinks = function(){
    return (
        <aside>
            <ul>
                {<RenderLink linkText="My orders" />}
                {<RenderLink linkText="My info" />}
                {<RenderLink linkText="Sign out" />}
            </ul>
        </aside>
    )
}

export default function AccountSideBar() {
  return (
    <div>
        <SectionHeader str={"Hello Collins"}/>
        <p>Welcome to your Account</p>

        <section>
            <SideBarLinks/>
        </section>
    </div>
  )
}
