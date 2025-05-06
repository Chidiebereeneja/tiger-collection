import{ useEffect, useState } from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { RiDeleteBinLine } from 'react-icons/ri'

const PElRender = function({str, isSpan = false, elStyle = ""}) {
    const pStyle = isSpan ? "col-span-3" : ""
    return <p className={pStyle + elStyle}>{str}</p>
}
export default function CartCardBody({obj, index, data, setGetSubTotal, getSubTotal}) {
  
    const [subTotal, setSubTotal] = useState(+obj.price * +obj.qty)
    const [price, setPrice] = useState(+obj.price)
    const [counterQty, setCounterQty] = useState(+obj.qty)
    const [incrementTrack, setIncrementTrack] = useState(true)

    // useEffect(() => {
    //     setGetSubTotal((prev) => prev + subTotal);
    // }, [])

    useEffect(() => {
        setGetSubTotal(prev => prev - subTotal + (counterQty * obj.price)); // Prevents duplicate updates
      }, [counterQty]);
      

      const handleIncrement = () => {
          setCounterQty(counterQty + 1)
          const check = getSubTotal + +obj.price
          setGetSubTotal(check);
          setIncrementTrack(true)
      }
  
      const handleDecrement = () => {
          if (counterQty > 0) {
              setCounterQty(counterQty - 1)
              const check = getSubTotal - +obj.price
                setGetSubTotal(check);
              setIncrementTrack(false)
          }
      }
  
      useEffect(() => {
          if(incrementTrack) {
              setSubTotal(counterQty * +obj.price)
            } else {
                setSubTotal(subTotal - +obj.price)
                
                
                if(counterQty === 0) {
                    setSubTotal("0.00")
                }
                
            }
        }, [counterQty])

  
      return (
          <div className={index === data.length - 1 ? "grid grid-cols-7 gap-2 py-5" : "grid grid-cols-7 gap-2 border-b-[1px] border-b-feedbackCol-100 py-5"} >
              <figure className="flex gap-3 h-full col-span-3 items-center">
                  <img src={obj.image} alt="image" className="h-[120px] w-[105px] rounded-[12px] object-center object-cover" />
  
                  <figcaption className="flex flex-col gap-2 self-start mt-1">
                      <h3 className="text-[18px] font-semibold leading-[100%] tracking-[2%] text-sectionHeaderCol-100 ">{obj.name}</h3>
  
                      <p className="text[14px] font-medium leading-[100%] text-textColor-100 ">
                          <span>Color:</span>
                          <span>{obj.color}</span>
                      </p>
  
                      <p className="text[14px] font-medium leading-[100%] text-textColor-100 ">
                          <span>Size:</span>
                          <span>{obj.size}</span>
                      </p>
                  </figcaption>
              </figure>
  
  
              <PElRender str={"₦" + price} elStyle="self-center text-[18px] font-semibold leading-[100%]  text-sectionHeaderCol-100 "/>
  
              <p className="flex items-center justify-center self-center h-[36px] w-[100px] rounded-[12px] gap-3 bg-searchInputCol-100 text-[12px] font-medium leading-[100%]">
  
                  <button className="cursor-pointer text-[12px]" data-id={index} id="minus" onClick={handleDecrement}><FiMinus/></button>
                  <span>{counterQty}</span>
                  <button className="cursor-pointer text-[12px]" data-id={index} id="plus" onClick={handleIncrement}><FiPlus/></button>
              </p>

  
              <PElRender str={"₦" + subTotal} elStyle="self-center text-[18px] font-semibold leading-[100%]  text-sectionHeaderCol-100 tracking-[2%]" />
  
              <RiDeleteBinLine className="self-center text-purpleCol-100 cursor-pointer "/>
          </div>
      )
  
}
