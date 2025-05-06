import React from 'react'

export default function Input({typeStr, styleInput, setValue, inputId, placeholder}) {

    const handleInput = function(e) {
        setValue(e.target.value)
        
    }

  return (
    <input type={typeStr} id={inputId} className={styleInput} onChange={handleInput} placeholder={placeholder} />
  )
}
