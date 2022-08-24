import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { TriangleDownIcon } from "@chakra-ui/icons";
import Plans from "./Plans";
const PricingPlans = () => {
  const [annactive, setAnnActive] = useState(true);
  const [Monactive, setMonActive] = useState(false);
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
      <Box m="60px auto 50px" maxW={"40%"} position="relative">
        <Flex justifyContent={"center"}>
          <Box
            color={"black"}
            bg="#FCE5D8"
            p={"0px 30px"}
            position="absolute"
            left="-5px"
            top="25px"
            transform="rotate(-25deg)"
          >
            <Text>Save 10%</Text>
            <Text position="absolute" left="40%" bottom="-14px" color="#FCE5D8">
              <TriangleDownIcon />
            </Text>
          </Box>
          <Box color={"#FCE5D8"} fontSize="18px" p="10px 0">
            Choose your billing:
          </Box>
        </Flex>
        <Flex
          maxW={"72.5%"}
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
            textAlign={"center"}
            color={"black"}
            p="10px 20px"
            borderRadius="25px"
            position={"absolute"}
            left="50%"
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
            }}
            onMouseOut={() => {
              setHoverSlider(false);
            }}
            onClick={() => setHoverSlider(false)}
          >
            {!hoverSlider ? "Annual" : "Monthly"}
          </Box>
        </Flex>
      </Box>
      <Plans />
    </Box>
  );
};

export default PricingPlans;
