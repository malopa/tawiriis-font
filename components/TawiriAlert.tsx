import { Alert, AlertDescription, AlertIcon, AlertTitle } from '@chakra-ui/react'
import React from 'react'

export default function TawiriAlert({_status}) {
  return (
    // status ==> error, success, warning, and info 
    <Alert status={_status}>
        <AlertIcon />
        <AlertTitle>Your browser is outdated!</AlertTitle>
        <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
    </Alert>
  )
}
