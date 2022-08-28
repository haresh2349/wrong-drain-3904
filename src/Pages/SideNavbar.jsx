import React, { useState } from 'react'
import {
    Box,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Flex,
    Heading,
    Spacer,
    Image,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react'

import { HamburgerIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'


const SideNavbar = () => {

    const [size, setSize] = React.useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleClick = (newSize) => {
        setSize(newSize)
        onOpen()
    }
    return (

        <Box p="2rem" bg="#fce5d8">
            <Flex  >
                <Box>
                    <Image maxW="10rem" src="https://toggl.com/blog/wp-content/uploads/2020/09/toggl-track_logotype_horizontal_pink_rgb-e1599116263835.png" />
                </Box>
                <Spacer />
                <Box>
                    <Button
                        onClick={() => handleClick(size)}
                        key='full'
                        m={4}
                    >
                        <HamburgerIcon />
                    </Button>
                </Box>
            </Flex>



            <Drawer onClose={onClose} isOpen={isOpen} size={size}>
                <DrawerOverlay />
                <DrawerContent bg="#fce5d8" >
                    <DrawerCloseButton />
                    <DrawerHeader><Image maxW="10rem" src="https://toggl.com/blog/wp-content/uploads/2020/09/toggl-track_logotype_horizontal_pink_rgb-e1599116263835.png" /></DrawerHeader>
                    <hr style={{ borderColor: "black" }} />
                    <DrawerBody>
                        <Box>
                            <Box>
                                Product
                            </Box>
                            <Box>
                                Pricing
                            </Box>
                            <Box>
                                <Menu>
                                    <MenuButton as={Button} colorScheme='#fce5d8' color="black" >
                                        Why Track <ChevronRightIcon />
                                    </MenuButton>
                                    <MenuList bg='#fce5d8' color="black" >
                                        <MenuGroup>
                                            <MenuItem>
                                                <Link to="/track/freelance-time-tracking" >For freelancers and solo users</Link>
                                            </MenuItem>
                                        </MenuGroup>
                                        <MenuGroup>

                                            <MenuItem><Link to="/track/time-tracking-small-teams" >For small teams</Link></MenuItem>
                                        </MenuGroup>
                                        <MenuGroup>

                                            <MenuItem><Link to="/track/time-tracking-large-teams">for big teams</Link></MenuItem>
                                        </MenuGroup>
                                    </MenuList>
                                </Menu>
                            </Box>
                            <Box>
                                Careers
                            </Box>
                            <Box>
                                Book a demo
                            </Box>
                        </Box>
                        <br />
                        <Box>
                            <Flex justify="center" > <Box border="1px solid #e57cd8" pl="15px" pr="15px" pt="7px" pb="7px" bg="#e57cd8" borderRadius="2rem" color="#ffffff" >Try for free</Box> </Flex>
                            <Flex justify="center" > <Box p="1rem" >Log in</Box> </Flex>
                        </Box>

                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>

    )
}

export default SideNavbar