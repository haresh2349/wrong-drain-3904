import React from 'react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    useDisclosure,
    Button,
  } from '@chakra-ui/react'

const PopoverComponent = () => {
    const { isOpen, onOpen, onClose ,onToggle} = useDisclosure()
  return (
    <Popover>
  <PopoverTrigger>
    <Button onClick={onOpen}>Trigger</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader>Confirmation!</PopoverHeader>
    <PopoverBody>dhfhgdngfmnhfm
    </PopoverBody>
  </PopoverContent>
</Popover>
  )
}

export default PopoverComponent