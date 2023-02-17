import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from '@chakra-ui/react'
import NavLink from './links'

export default function NavAccord({title,path,children}) {

  return (
    <Accordion allowToggle>
      <AccordionItem _hover={{bg:'gray-400'}} border='0px'>
          <AccordionButton>
              <Box textColor='gray.500' as="span" flex='1' 
              textAlign='left'>
              {title}
              </Box>
              <AccordionIcon fontSize='1.5rem' />
          </AccordionButton>  

        <AccordionPanel border={`none`}>
          {/* <NavLink title={title} path={path} /> */}
          {children}
        </AccordionPanel> 

      </AccordionItem>

      

    </Accordion>
  )
}
