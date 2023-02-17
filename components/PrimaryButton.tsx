import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import TwiraSpinner from './TwiraSpinner'

export default function PrimaryButton(props) {
  
  return (
    <Button 
    bg='blue.400'
    colorScheme='blue.500' 
    _hover={{bg:'blue.300'}}
    onClick={props.onClick}>{props.loading?<TwiraSpinner/>:''}{props.title}</Button>
  )
}
