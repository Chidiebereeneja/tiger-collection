import React from 'react'
import GroupInput from './GroupInput'
import Label from './Label'

export default function InputContainer({setFirstName, setLastName, setcountry, setCompany, setStreetAdress, setSuiteAddress, setCityAddress, setPhoneNumber, setPostalCode, setShipping, states}) {

    const handleSelectEl = function(e) {
        setShipping(e.target.value)
        
    }

  return (
    <React.Fragment>
        <div className="grid grid-cols-2 gap-7">
                        <GroupInput setValue={setFirstName} arr={[
                            {
                                id: "firstname",
                                name: "First Name*",
                                typeStr: "text",
                                placeholder: "First Name",
                            }
                            
                        ]} />
        
                        <GroupInput setValue={setLastName} arr={[
                            {
                                id: "lastname",
                                name: "Last Name*",
                                typeStr: "text",
                                placeholder: "Last Name",
                            }
                            
                        ]} />
        </div>

        <div className="grid grid-cols-2 gap-7">
            <GroupInput setValue={setcountry} arr={[
                {
                    id: "country/region",
                    name: "Country / Region*",
                    typeStr: "text",
                    placeholder: "Country / Region",
                }
            ]} />

            <GroupInput setValue={setCompany} arr={[
                {
                    id: "company",
                    name: "Company Name",
                    typeStr: "text",
                    placeholder: "Company (optional)",
                }
            ]} />
        </div>

        <div className="grid grid-cols-2 gap-7">
            <GroupInput setValue={setStreetAdress} arr={[
                {
                    id: "streetaddress",
                    name: "Street Address*",
                    typeStr: "text",
                    placeholder: "Street Address",
                }
            ]} />

            <GroupInput setValue={setSuiteAddress} arr={[
                {
                    id: "Aptsuiteunit",
                    name: "Apt, suite, unit",
                    typeStr: "text",
                    placeholder: "apartment, suite, unit, etc. (optional)",
                }
            ]} />
        </div>

        <div className="grid grid-cols-3 gap-7">
            <GroupInput setValue={setCityAddress} arr={[
                {
                    id: "city",
                    name: "City*",
                    typeStr: "text",
                    placeholder: "Town / City",
                }
            ]} />

            <div className="flex flex-col gap-1">

                <Label str="State" forId="state" styleStr="text-[16px] font-semibold leading-[100%] tracking-[2%] "/>

                <select name="state" id="state" className="bg-searchInputCol-100 h-[44px] rounded-[8px] outline-none px-2 text-[14px] font-normal leading-[100%] " onChange={handleSelectEl}>
                    <option value="State" id="0"> State</option>
                    {states && states.map((obj, i) => <option key={obj.name} value={obj.name} id={100 * i}>{obj.name}</option>)}
                </select>
            </div>

            <GroupInput setValue={setPostalCode} arr={[
                {
                    id: "postalcode",
                    name: "Postal Code*",
                    typeStr: "text",
                    placeholder: "Postal Code",
                }
            ]} />
        </div>

        <div className="grid grid-cols-3 gap-7">
            <GroupInput setValue={setPhoneNumber} arr={[
                {
                    id: "phone",
                    name: "Phone*",
                    typeStr: "number",
                    placeholder: "Phone",
                }
            ]} />
        </div>
    </React.Fragment>
  )
}
