import React from 'react'
import { FiShoppingCart } from "react-icons/fi";


export default function Button({style, contentStr, onClick, isIcon = false}) {

  return (
    <button className={`${style} cursor-pointer`} onClick={onClick}> {isIcon ? <FiShoppingCart className="text-[17px] font-semibold leading-[100%]"/> : ""}{contentStr}</button>
  )
}
