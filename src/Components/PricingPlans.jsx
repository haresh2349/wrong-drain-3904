import { Box, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

const PricingPlans = () => {
  const [monHover, setMonHover] = useState(false);
  const [annHover, setAnnHover] = useState(false);
  const [hoverSlider, setHoverSlider] = useState(false);
  return (
    <Box maxW={"1260px"} m="auto" bg={"#2C1338"}>
      <Box maxW={"50%"} m="auto" color={"#FCE5D8"} textAlign="center">
        <Heading p="2rem 0" size={"2xl"}>
          Pricing Plans
        </Heading>
        <Text fontSize={"lg"} m="20px 0">
          No credit card required. All plans come with a free, 30-day trial of
          our Premium features.
        </Text>
      </Box>
      <Box>
        <Flex justifyContent={"center"}>
          <Box color={"black"} bg="#FCE5D8" p={"5px 10px"}>
            Save 10%
          </Box>
          <Box color={"#FCE5D8"}>Choose your billing:</Box>
        </Flex>
        <Flex
          maxW={"29.5%"}
          gridGap="5px"
          height="50px"
          p="3px 0"
          bg="#FFFF"
          justifyContent={"center"}
          m="auto"
          borderRadius={"25px"}
          position="relative"
        >
          <Box
            w="180px"
            bg="#FFFF"
            textAlign={"center"}
            color={"black"}
            p="10px 20px"
            borderRadius="25px"
            position={"absolute"}
            left="1"
          >
            Annual
          </Box>
          <Box
            w="180px"
            display={hoverSlider ? "none" : "block"}
            textAlign={"center"}
            color={"black"}
            p="10px 20px"
            borderRadius="25px"
            position={"absolute"}
            left="50%"
            zIndex="1"
            bg="#FFFF"
            onMouseOver={() => setHoverSlider(true)}
          >
            Monthly
          </Box>
          <Box
            w="180px"
            textAlign={"center"}
            color={"#FFFF"}
            p="10px 20px"
            borderRadius="25px"
            position={"absolute"}
            left={!hoverSlider ? "1" : "50%"}
            right={!hoverSlider ? "50%" : "99%"}
            bg={hoverSlider ? "rgb(86, 66, 96)" : "#E57CD8"}
            transition={"all 0.5s ease-in"}
            _hover={{
              bg: "rgb(86, 66, 96)",
              //   transform: { hoverSlider } && "translateX(50%)",
            }}
            onMouseOut={() => {
              setHoverSlider(false);
            }}
          >
            {!hoverSlider ? "Annual" : "Monthly"}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default PricingPlans;
