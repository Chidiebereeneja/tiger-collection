import React from 'react'

export default function Button({style, contentStr, navigationPage}) {

    const handleButtonEvent = function(e) {
        console.log(e.target);
        console.log(navigationPage);
    }


  return (
    <button className={`${style} cursor-pointer`} onClick={handleButtonEvent}>{contentStr}</button>
  )
}
