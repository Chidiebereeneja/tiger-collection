import{ useState } from 'react'
import RadioCard from './RadioCard'
import Input from './Input'

const PaymentCardLogo = function({imageSrc}) {
  const altText = imageSrc.split("/").slice(-1).join("")
  return (
    <img src={imageSrc} className="h-full w-[80px] object-contain p-2 rounded-[8px] object-center bg-primaryCol-100 " alt={altText} />
  )
}

export default function AtmCardPaymentMethod() {
  const [cardNumber, setCardNumber] = useState(0)
  const [cardName, setCardName] = useState(0)
  const [expiringDate, setExpiringDate] = useState(0)
  const [securityCode, setSecurityCode] = useState(0)
  const [acceptCreditCard, setAcceptCreditCard] = useState(false)

  return (
      <div className="bg-searchInputCol-100 border-b-[1px] border-checkoutCol-100 rounded-t-[12px] flex flex-col gap-5 px-5 ">
        <RadioCard typeStr="radio" labelStr="Credit Card" subTxt="We accept all major credit cards." isSubTxt={true} strId="creditcard" setValue={setAcceptCreditCard}  />
  
  
        <div className="h-[46px] flex items-center gap-4">
          <PaymentCardLogo imageSrc={"src/assets/images/master_card.png"}/>
  
          <PaymentCardLogo imageSrc={"src/assets/images/Verve-logo.png"}/>
  
          <PaymentCardLogo imageSrc={"src/assets/images/googlepay.png"}/>
  
          <PaymentCardLogo imageSrc={"src/assets/images/paypass.png"}/>
        </div>
  
        <div className="border-b-[1px] border-feedbackCol-100 flex flex-col gap-7 pb-7" >
  
          <div className="flex items-center gap-6 w-[600px] ">
            <Input typeStr="number" inputId="cardnumber" styleInput={" h-[44px] rounded-[8px] border border-sectionHeader-100 text-[14px] font-normal leading-[100%] text-textColor-100 px-2 outline-none w-full grow appearance-none "} placeholder="Card number" setValue={setCardNumber} />
            
            <Input typeStr="text" inputId="cardname" styleInput={" h-[44px] rounded-[8px] border border-sectionHeader-100 text-[14px] font-normal leading-[100%] text-textColor-100 px-2 outline-none grow w-full "} placeholder="Name of card" setValue={setCardName} />
          </div>
  
          <div className="flex items-center gap-6 w-[600px]">
            <Input typeStr="text" inputId="date" styleInput={" h-[44px] rounded-[8px] border border-sectionHeader-100 text-[14px] font-normal leading-[100%] text-textColor-100 px-2 outline-none grow  w-full"} placeholder="Expiration date (MM/YY)" setValue={setExpiringDate} />
  
            <Input typeStr="text" inputId="security" styleInput={" h-[44px] rounded-[8px] border border-sectionHeader-100 text-[14px] font-normal leading-[100%] text-textColor-100 px-2 outline-none grow w-full "} placeholder="Security Code" setValue={setSecurityCode} />
          </div>
  
        </div>
      </div>
    )
}
