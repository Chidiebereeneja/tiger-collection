import{ useState } from 'react'
import Button from './Button'
import InputContainer from './InputContainer'
import Input from './Input'
import Label from './Label'
import RadioContainer from './RadioContainer'


const BillingForm = function({setShipping, states}) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [country, setcountry] = useState("")
    const [company, setCompany] = useState("")
    const [streetAdress, setStreetAdress] = useState("")
    const [suiteAddress, setSuiteAddress] = useState("")
    const [cityAddress, setCityAddress] = useState("")
    const [postalCode, setPostalCode] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [saveDetails, setSaveDetails] = useState("")
    
    
    return (
        <form className="flex flex-col gap-6">
        
        <InputContainer setCityAddress={setCityAddress} setCompany={setCompany} setFirstName={setFirstName} setLastName={setLastName} setPhoneNumber={setPhoneNumber} setPostalCode={setPostalCode} setStreetAdress={setStreetAdress} setSuiteAddress={setSuiteAddress} setcountry={setcountry} setShipping={setShipping} states={states} />

          <div className="flex flex-col gap-5 border-b-[1px] border-checkoutCol-100 pb-8 ">
            <Button style={"bg-purpleCol-100 text-primaryCol-100 text-[18px] font-medium leading-[100%] h-[50px] w-[225px] rounded-[8px] "} contentStr={"Continue to delivery"} />

            <div className="flex gap-1 items-center">
                <Input typeStr={"checkbox"} inputId={"savecheckbox"} setValue={setSaveDetails}/>
                <Label str={"Save my information for a faster checkout"} forId={"savecheckbox"} styleStr={"text-[17px] font-normal leading-[100%] "}/>
            </div>
          </div>

          <RadioContainer/>
        </form>
    )
}

export default function BillingDetails({setShipping, states}) {
  return (
    <div>
        <h1 className="text-[22px] font-normal leading-[33.5px] tracking-[2%] text-sectionHeaderCol-100
        my-4 mb-7 ">Billing Details</h1>

        <BillingForm setShipping={setShipping} states={states} />
    </div>
  )
}
