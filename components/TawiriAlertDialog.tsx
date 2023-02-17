import React, { useRef } from 'react'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
    useDisclosure,
    Box,
  } from '@chakra-ui/react'
  
export default function TawiriAlertDialog({open,setOpenDialog}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef(null)

  return (
    <AlertDialog
      isOpen={open}
      leastDestructiveRef={cancelRef}
      onClose={()=>setOpenDialog(!open)}
    >
      <AlertDialogOverlay>
        <AlertDialogContent bg='white'>
          <AlertDialogHeader fontSize='lg' fontWeight='bold'>
            Delete 
          </AlertDialogHeader>

          <AlertDialogBody>
            Are you sure? You can't undo this action afterwards.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={()=>setOpenDialog(!open)}>
              Cancel
            </Button>
            <Button colorScheme='red' onClick={()=>setOpenDialog(!open)} ml={3}>
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}
