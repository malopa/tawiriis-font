import { Input } from '@chakra-ui/react'
import React from 'react'

export default function TwiraInput({placeholder,name,value,onChange,type}) {
  return (
    <Input placeholder={placeholder} 
    size='md'
    bg='white'
    
    name={name}
    colorScheme='blue.400'
    value={value}
    onChange={onChange}
    _focus={{borderColor:'gray.500'}}
    _hover={{borderColor:'gray.600'}}
    autoComplete='off'
    type={type}
    />
  )
}
