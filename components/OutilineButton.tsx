import { Button } from '@chakra-ui/react'
import React from 'react'

export default function OutilineButton({onClick}) {
  return (
    <Button 
    onClick={onClick}
    colorScheme='blue.500' variant='outline'>
        Button
  </Button>
  )
}
