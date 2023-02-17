import React from 'react'
import { Spinner } from '@chakra-ui/react'
export default function TwiraSpinner() {
  return (
    <Spinner 
    thickness='4px'
    speed='0.65s'
    emptyColor='gray.200'
    color='gray.600'
    size='md'
    />
  )
}
