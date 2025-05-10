import React from 'react'

export default function Input({typeStr, styleInput, setValue, inputId, placeholder, isSetValue = true}) {

    const handleInput = function(e) {
      isSetValue ? setValue(e.target.value) : null
        
    }

  return (
    <input type={typeStr} id={inputId} className={styleInput} onChange={handleInput} placeholder={placeholder} />
  )
}
