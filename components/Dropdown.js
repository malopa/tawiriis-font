import React from 'react'
import { Select } from '@chakra-ui/react'
export default function Dropdown({options,placeholder,onClick}) {
  return (
    <Select size='md' placeholder={placeholder} onChange={onClick}>
        {options.map(o=><option key={o.url} 
        value={o.value}>{o.name}</option>)}
    </Select>
  )
}
