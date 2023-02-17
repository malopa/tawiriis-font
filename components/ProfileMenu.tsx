import { Avatar, AvatarBadge, Box, Divider, IconButton, Menu, MenuButton, MenuDivider, MenuItem, MenuList, VStack, Wrap, WrapItem } from '@chakra-ui/react'
import { faSignOutAlt, faUserAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function ProfileMenu() {
  return (
        <Menu >
            <MenuButton p={2}
                px={4}
                py={2}
                transition='all 0.2s'
                borderRadius='full'
                borderWidth='1px'
                border='none'
                _hover={{ bg: 'blue.500' }}
                _expanded={{ bg: 'blue.400' }}
                _focus={{ boxShadow: 'outline' }}

                as={IconButton}
                icon={<FontAwesomeIcon fontSize={24} icon={faUserCircle} />}
            >
            {/* File  */}
            {/* <ChevronDownIcon /> */}
            {/* <IconButton aria-label='Search database' icon={<FontAwesomeIcon icon={faUserAlt} />} /> */}

        </MenuButton>
            <MenuList border='0px'  p={2} px={4} 
            width={250} 
            borderRadius='md'
            minHeight={200}>
                {/* <Avatar> */}
                {/* </Avatar> */}
                <MenuItem py='4px' textColor='gray.500'>
                    <Avatar textColor='blue.600' mr='10px' 
                    name='Oshigaki Kisame' src='https://bit.ly/broken-link' />
                        <VStack textAlign='left' px='4px'>
                            {/* <Box textAlign='left'>username</Box> */}
                            <Box textAlign='left'>example@gmil.com</Box>
                        </VStack>
                </MenuItem>

                <Divider />
                <MenuItem py='4px' textColor='black'>My Profile</MenuItem>
                <MenuItem py='4px' textColor='black'>Edit Profile</MenuItem>
                <MenuItem py='4px' textColor='black'>Setting</MenuItem>
                <MenuItem py='4px' mt='5px' textColor='black' px='4px'>
                    <FontAwesomeIcon icon={faSignOutAlt} color='gray.500' fontSize={24} /> Logout
                </MenuItem>
            </MenuList>
        </Menu>
  )
}
