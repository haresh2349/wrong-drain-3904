import React from 'react'
import {Box,Flex,Heading,Image,Text,Button} from "@chakra-ui/react"
import { Link } from "react-router-dom";

const EmptyProject = () => {
  return (
    <Box bg="#FEF9F7" position="relative" height="600px">
        <Flex
          w="50%"
          m="auto"
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          flexDirection="column"
          textAlign="center"
          bg="#FFFF"
          p="30px"
          height="500px"
          borderRadius="12px"
          boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
        >
          <Box>
            <Image
              w="50%"
              m="auto"
              src="https://web-assets.toggl.com/app/assets/images/7026023e2c995e75.png"
            />
          </Box>
          <Heading size="md">Create a Project and get organized!</Heading>
          <Text>
            Projects are the backbones of time entry categorization in your
            workspace.{" "}
          </Text>
          <Button w="20%" m="auto" bg="#DD6FD1" color="#FFFF">
            Create one
          </Button>
          <Link to="#">Learn more</Link>
        </Flex>
      </Box>
  )
}

export default EmptyProject