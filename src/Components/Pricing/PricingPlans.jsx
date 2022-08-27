import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FiEye } from "react-icons/fi";
import { BsFillTriangleFill, BsSquareFill } from "react-icons/bs";
import React, { useState } from "react";
import { TriangleDownIcon } from "@chakra-ui/icons";
import Plans from "./Plans";
import Faqs from "./Faqs";
import PlanComparison from "../PlanComparison";
const PricingPlans = () => {
  const [annactive, setAnnActive] = useState(true);
  const [Monactive, setMonActive] = useState(false);
  const [monHover, setMonHover] = useState(false);
  const [annHover, setAnnHover] = useState(false);
  const [hoverSlider, setHoverSlider] = useState(false);
  return (
    <Box w={"100%"} m="auto" bg={"#2C1338"}>
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
            left="45px"
            top="12px"
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
          maxW={"68%"}
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
            w="50%"
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
      <Box w="50%" m="60px auto " color="#FFFF" textAlign="center">
        <Text mb="20px">
          All plans come with a free, 30-day trial of Toggl Track Premium—no
          credit card required. You can choose to upgrade at the end of the
          trial or continue using Track for free.
        </Text>
        <Text mb="30px">Still unsure?</Text>
        <Button
          size={"2xl"}
          varient="outline"
          color={"#FCE5D8"}
          bg="none"
          border="1px solid #FCE5D8"
          borderRadius="50px"
          p="20px"
          _hover={{ bg: "#FCE5D8", color: "#E57CD8" }}
        >
          {`Compare all plan features >`}
        </Button>
      </Box>
      <Box
        w="100%"
        bg="linear-gradient( 10deg, #412A4C 50%, #2C1338 50.1% )"
        pb="50px"
      >
        <Box w="70%" m="auto" position={"relative"}>
          <HStack bg="#FFF3ED" p="40px" justifyContent="space-between">
            <Box w="70%">
              <Heading size="md" color="#2C1338" p="20px" letterSpacing="2px">
                “Toggl Track increased our profitability by at least 20%. We
                found out where the team was spending too much time on clients.
                Toggl Track gave us the ability to restrategize, find out what’s
                wrong, and fix it. ”
              </Heading>
              <Flex gridGap="10px">
                <Text m="0">— Sweat+Co on Toggl Track’s Premium plan. </Text>
                <Text
                  fontWeight="600"
                  _hover={{ color: "#E57CD8" }}
                  as={"span"}
                >{`Read the case study >`}</Text>
              </Flex>
            </Box>
            <Box>
              <Image
                position="absolute"
                top="-35px"
                right="30px"
                src="	https://public-assets.toggl.com/b/static/81d28305aa04efef1d9588833a218978/a9ff4/case-study-sweatandco.avif"
              />
            </Box>
          </HStack>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            bg="#FCE5D8"
            p="20px 40px"
          >
            <Heading size="md">
              Toggl Track is trusted by Sweat+Co and 70,000+ teams
            </Heading>
            <Button
              p="25px 35px"
              color="#FFFF"
              bg="#E57CD8"
              borderRadius="50px"
            >
              Try Toggl Track
            </Button>
          </Flex>
          <Box
            position="absolute"
            w="40px"
            h="40px"
            left="-23px"
            top="-90px"
            borderRadius="50%"
            bg="#FFFF"
          ></Box>
          <Box
            top="-60px"
            left="50px"
            position="absolute"
            transform="rotate(45deg)"
          >
            <BsFillTriangleFill width="40px" height="40px" color="#F9D58A" />
          </Box>
          <Box
            top="-42px"
            left="-85px"
            position="absolute"
            transform="rotate(45deg)"
          >
            <BsSquareFill
              width="50px"
              height="50px"
              transform="rotate(45deg)"
              color="#F9D58A"
            />
          </Box>
          <Box
            position="absolute"
            w="30px"
            h="30px"
            right="-50px"
            bottom="20px"
            borderRadius="50%"
            bg="#FF897A"
          ></Box>
        </Box>
        <Box w="70%" m="50px auto 0">
          <Box padding="20px">
            <Image
              m="auto"
              src="https://public-assets.toggl.com/b/static/1ede89b0d75ce5a9cd6476ba3f2d6cf4/83e96/brands-oneliner.avif"
            />
          </Box>
        </Box>
      </Box>
      <Faqs />
      <PlanComparison />
    </Box>
  );
};

export default PricingPlans;
