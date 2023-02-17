import { IconButton, Menu, MenuButton } from '@chakra-ui/react'
import { faHamburger } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function ToggleMenu() {
  return (
    <Menu>
        <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={<FontAwesomeIcon icon={faHamburger} />}
            variant='outline'
        />
  </Menu>
  )
}
