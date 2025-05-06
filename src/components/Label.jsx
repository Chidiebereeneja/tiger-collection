import React from 'react'

export default function Label({str, forId, styleStr}) {
  return (
    <label htmlFor={forId} className={styleStr + " cursor-pointer"} >{str}</label>
  )
}
