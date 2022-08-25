import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { CheckIcon, TriangleDownIcon } from "@chakra-ui/icons";
const Plans = () => {
  const free = [
    {
      id: 1,
      text: "Unlimited time tracking",
    },
    {
      id: 2,
      text: "Unlimited projects, clients, and tags",
    },
    {
      id: 3,
      text: "Exportable reports",
    },
    {
      id: 4,
      text: "Web app, mobile apps, and desktop apps",
    },
    {
      id: 5,
      text: "Automated time tracking triggers",
    },
    {
      id: 6,
      text: "Idle time detection",
    },
    {
      id: 7,
      text: "Pomodoro timer",
    },
    {
      id: 8,
      text: "CSV imports",
    },
    {
      id: 9,
      text: "Personal desktop activity tracking",
    },
    {
      id: 10,
      text: "Track time in 100+ popular tools",
    },
  ];
  const starter = [
    {
      id: 1,
      text: "Everything in Free +",
    },
    {
      id: 2,
      text: "Billable rates",
    },
    {
      id: 3,
      text: "Time rounding for reports",
    },
    {
      id: 4,
      text: "Favorite time entries",
    },
    {
      id: 5,
      text: "Create Saved Reports for quick online access",
    },
    {
      id: 6,
      text: "Project time estimates and alerts",
    },
    {
      id: 7,
      text: "Tasks (Sub-projects)",
    },
    {
      id: 8,
      text: "Pre-populated project templates",
    },
    {
      id: 9,
      text: "View tracked time in your calendar",
    },
  ];
  const premium = [
    {
      id: 1,
      text: "Everything in Starter +",
    },
    {
      id: 2,
      text: "Team time tracking reminders",
    },
    {
      id: 3,
      text: "Schedule saved reports via email",
    },
    {
      id: 4,
      text: "Time tracking audits",
    },
    {
      id: 5,
      text: "Project forecasts and analysis",
    },
    {
      id: 6,
      text: "Centralized control of labor costs and billable rates for team members",
    },
    {
      id: 7,
      text: "Lock time entries and add time for team members",
    },
    {
      id: 8,
      text: "Set required fields for time entries",
    },
    {
      id: 9,
      text: "Single sign-on (SSO)",
    },
    {
      id: 10,
      text: "Native Jira and Salesforce integrations",
    },
  ];
  const enterPrise = [
    {
      id: 1,
      text: "Everything in Premium +",
    },
    {
      id: 2,
      text: "Manage multiple workspaces under one Organization",
    },
    {
      id: 3,
      text: "Priority support",
    },
    {
      id: 4,
      text: "Expert training and assistance",
    },
    {
      id: 5,
      text: "Customizable solutions",
    },
    {
      id: 6,
      text: "Volume discounts for large teams on our annual plan",
    },
  ];
  const [button1Hovered, setButton1Hovered] = useState(false);
  const [button2Hovered, setButton2Hovered] = useState(false);
  const [button3Hovered, setButton3Hovered] = useState(false);
  const [button4Hovered, setButton4Hovered] = useState(false);
  return (
    <Box w="100%" m="auto">
      <Grid w="80%" m="auto" gridTemplateColumns={"repeat(4,24%)"} gap="10px">
        <GridItem position="relative" bg="#412A4C" p="20px" mt="50px">
          <Heading size={"md"} color="#FFFF" mb="15px">
            Free
          </Heading>
          <Text color="#FFFF" mb="20px">
            Seamless time tracking and reporting designed with freelancers in
            mind
          </Text>
          <HStack
            borderBottom="1px solid #808080"
            paddingBottom="30px"
            mb="15px"
          >
            <Heading size={"2xl"} color="#E57CD8">
              $0
            </Heading>
            <Text color="#FFFF" fontSize="14px">
              Free for up to 5 users.
            </Text>
          </HStack>
          <Flex flexDirection={"column"} gridGap="15px" mb="65px">
            {free.map((el) => {
              return (
                <HStack key={el.id}>
                  <CheckIcon color={"#E57CD8"} fontSize="18px" />
                  <Heading size={"xs"} color="#FFFF">
                    {el.text}
                  </Heading>
                </HStack>
              );
            })}
          </Flex>
          <Box position="absolute" bottom="10px" left="20px" right="20px">
            <Box
              display={button1Hovered ? "block" : "none"}
              bg="#E57CD8"
              p="20px"
              textAlign="center"
              position="relative"
              mb="10px"
              mt="20px"
            >
              <Text>
                Free plans comes with free access to Premium features for 30
                days-- no strings attached!
              </Text>
              <TriangleDownIcon
                position="absolute"
                bottom="-12px"
                left="45%"
                color="#E57CD8"
              />
            </Box>
            <Box>
              <Button
                w="100%"
                p="20px 0"
                size="ld"
                borderRadius="30px"
                bg="#2C1338"
                color="#FFFF"
                _hover={{ bg: "#564260" }}
                onMouseOver={() => setButton1Hovered(true)}
                onMouseOut={() => setButton1Hovered(false)}
              >
                Get Started
              </Button>
            </Box>
          </Box>
        </GridItem>
        <GridItem position="relative" bg="#412A4C" p="20px" mt="50px">
          <Heading color="#FFFF" size="md" mb="15px">
            Starter
          </Heading>
          <Text color="#FFFF" mb="20px">
            Built for small teams to work at a fast pace without a lot of
            overhead
          </Text>
          <HStack
            borderBottom="1px solid #808080"
            paddingBottom="30px"
            mb="15px"
          >
            <Heading size={"2xl"} color="#E57CD8">
              $10
            </Heading>
            <Text color="#FFFF" fontSize="14px">
              per user per month
            </Text>
          </HStack>
          <Flex flexDirection={"column"} gridGap="15px">
            {starter.map((el) => {
              return (
                <HStack key={el.id}>
                  <CheckIcon color={"#E57CD8"} fontSize="18px" />
                  <Heading size={"xs"} color="#FFFF">
                    {el.text}
                  </Heading>
                </HStack>
              );
            })}
          </Flex>
          <Box position="absolute" bottom="10px" left="20px" right="20px">
            <Box
              display={button2Hovered ? "block" : "none"}
              bg="#E57CD8"
              p="20px"
              textAlign="center"
              position="relative"
              mb="10px"
              mt="20px"
            >
              <Text>
                Starter plans come with free access to Premium features for 30
                days—no strings attached!
              </Text>
              <TriangleDownIcon
                position="absolute"
                bottom="-12px"
                left="45%"
                color="#E57CD8"
              />
            </Box>
            <Box>
              <Button
                w="100%"
                p="20px 0"
                size="ld"
                borderRadius="30px"
                color="#FFFF"
                bg="#2C1338"
                _hover={{ bg: "#564260" }}
                onMouseOver={() => setButton2Hovered(true)}
                onMouseOut={() => setButton2Hovered(false)}
              >
                Get Started
              </Button>
            </Box>
          </Box>
        </GridItem>
        <GridItem position="relative" bg="#E57CD8">
          <Text
            color="#FCE5D8"
            textAlign="center"
            padding="7px"
            fontSize="20px"
          >
            Best Value
          </Text>
          <Box bg="#FFF3ED" m="5px" p="20px">
            <Heading color="#E57CD8" size="md" mb="15px">
              Premium
            </Heading>
            <Text color="black" mb="20px">
              Powerful tools to keep growing teams aligned and agile
            </Text>
            <HStack
              borderBottom="1px solid #808080"
              paddingBottom="30px"
              mb="15px"
            >
              <Heading size={"2xl"} color="#E57CD8">
                $20
              </Heading>
              <Text color="black" fontSize="14px">
                per user per month
              </Text>
            </HStack>
            <Flex flexDirection={"column"} gridGap="15px">
              {premium.map((el) => {
                return (
                  <HStack key={el.id}>
                    <CheckIcon color={"#E57CD8"} fontSize="18px" />
                    <Heading size={"xs"} color="black">
                      {el.text}
                    </Heading>
                  </HStack>
                );
              })}
            </Flex>
            <Box position="absolute" bottom="10px" left="20px" right="20px">
              <Box
                display={button3Hovered ? "block" : "none"}
                bg="#E57CD8"
                p="20px"
                textAlign="center"
                position="relative"
                mb="10px"
                mt="20px"
              >
                <Text>The first 30 days are free!</Text>
                <TriangleDownIcon
                  position="absolute"
                  bottom="-12px"
                  left="45%"
                  color="#E57CD8"
                />
              </Box>
              <Box>
                <Button
                  w="100%"
                  p="20px 0"
                  size="ld"
                  borderRadius="30px"
                  color="#FFFF"
                  bg="#2C1338"
                  _hover={{ bg: "#564260" }}
                  onMouseOver={() => setButton3Hovered(true)}
                  onMouseOut={() => setButton3Hovered(false)}
                >
                  Get Started
                </Button>
              </Box>
            </Box>
          </Box>
        </GridItem>
        <GridItem position="relative" bg="#412A4C" p="20px" mt="50px">
          <Heading color="#FFFF" size="md" mb="15px">
            Enterprise
          </Heading>
          <Text color="#FFFF" mb="20px">
            Tailored solutions for your large or complex organization
          </Text>
          <HStack
            borderBottom="1px solid #808080"
            paddingBottom="30px"
            mb="15px"
          >
            <Heading size={"2xl"} color="#E57CD8">
              ~
            </Heading>
            <Text color="#FFFF" fontSize="14px">
              Custom pricing. Unlimited users
            </Text>
          </HStack>
          <Flex flexDirection={"column"} gridGap="15px">
            {enterPrise.map((el) => {
              return (
                <HStack key={el.id}>
                  <CheckIcon color={"#E57CD8"} fontSize="18px" />
                  <Heading size={"xs"} color="#FFFF">
                    {el.text}
                  </Heading>
                </HStack>
              );
            })}
          </Flex>
          <Box position="absolute" bottom="10px" left="20px" right="20px">
            <Box
              display={button4Hovered ? "block" : "none"}
              bg="#E57CD8"
              p="20px"
              textAlign="center"
              position="relative"
              mb="10px"
              mt="20px"
            >
              <Text>
                Free plans comes with free access to Premium features for 30
                days-- no strings attached!
              </Text>
              <TriangleDownIcon
                position="absolute"
                bottom="-12px"
                left="45%"
                color="#E57CD8"
              />
            </Box>
            <Box>
              <Button
                w="100%"
                p="20px 0"
                size="ld"
                borderRadius="30px"
                color="#FFFF"
                bg="#2C1338"
                _hover={{ bg: "#564260" }}
                onMouseOver={() => setButton4Hovered(true)}
                onMouseOut={() => setButton4Hovered(false)}
              >
                Get Started
              </Button>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Plans;
