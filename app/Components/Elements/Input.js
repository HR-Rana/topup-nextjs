"use client"

import React from 'react'

export default function Input({type, placeholder, id,name, value}) {
  return (
    <input type={type} placeholder={placeholder} name={name} id={id} value={value} />
  )
}
