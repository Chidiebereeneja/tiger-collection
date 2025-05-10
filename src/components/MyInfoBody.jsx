import { useEffect, useRef, useState } from 'react'
import SectionHeader from './SectionHeader'
import Button from './Button'
import UserAddressContainer from './UserAddressContainer'
import axios from 'axios'
import ChangeAddressPopup from './ChangeAddressPopup'
import ChangePasswordPopup from './ChangePasswordPopup'

const PasswordFormatter = function({str}) {
  const PasswordArr = str.split("")
  console.log(str);
  
}

const DetailsCard = function({headerStr, txtStr, isBorder = true}) {
  return (
    <p className={isBorder ? "font-semibold text-[16px] leading-[100%] flex flex-col gap-2 border-b-[1px] border-b-checkoutCol-100 py-3" : "font-semibold text-[16px] leading-[100%] flex flex-col gap-2 py-3"}>
      <span className="text-textColor-100">{headerStr}</span>
      <span className="text-sectionHeaderCol-100">{txtStr}</span>
    </p>
  )
}

export default function MyInfoBody() {
  const [userAddress, setUserAddress] = useState("");
  const changeAddressForm = useRef();
  <PasswordFormatter str="182938492"/>

  const fetchData = async function(){
    try{
      const res = await axios.get("/userinfo.json")
      setUserAddress(res.data)
    } catch(err) {
      console.log(err);
      
    }
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
  <div className="col-span-5 flex flex-col gap-3 relative">
    <SectionHeader str={"My Info"} isBorder={false} />

    <section className="flex flex-col gap-3">
      <h4 className="font-normal text-[22px] leading-[33.5px] tracking-[2%] text-sectionHeaderCol-100 flex justify-between ">
        <span>Contact Details</span>
        <Button contentStr="Change" style="font-semibold text-[16px] leading-[100%]"/>
      </h4>

      <DetailsCard headerStr="Your Name" txtStr="Collins Doe"/>

      <DetailsCard headerStr="Email Address" txtStr="collinsdoe@gmail.com"/>

      <DetailsCard headerStr="Phone Number" txtStr="8980252445"/>

      <div className="flex justify-between">
        <DetailsCard headerStr="Password" txtStr="8980252445" isBorder={false}/>
        <Button contentStr="Change" style="font-semibold text-[16px] leading-[100%] self-end" />
      </div>

      <p className="flex justify-between my-3">
        <span className="text-[22px] font-normal leading-[33.5px] tracking-[2%] text-sectionHeaderCol-100 ">Address</span>
        <Button contentStr="Add New" style="text-[16px] font-semibold leading-[100%] text-sectionHeaderCol-100 "/>
      </p>

    </section>

    <UserAddressContainer data={userAddress}/>

    <ChangeAddressPopup data={userAddress} ref={changeAddressForm}/>

    <ChangePasswordPopup/>
  </div>
  )
}
