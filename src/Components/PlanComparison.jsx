import { CheckIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import React from "react";

const PlanComparison = () => {
  const timeTracking = [
    {
      id: 1,
      title: "Web app, mobile apps, and desktop apps",
    },
    {
      id: 2,
      title: "Pomodoro timer",
    },
    {
      id: 3,
      title: "Idle time detection",
    },
    {
      id: 4,
      title: "Personal time tracking reminders",
    },
    {
      id: 5,
      title: "Automated time tracking triggers",
    },
    {
      id: 6,
      title: "Personal desktop activity tracking",
    },
    {
      id: 7,
      title: "Favorite time entries",
    },
  ];
  const timeManagement = [
    {
      id: 1,
      title: "Overview of team activity",
    },
    {
      id: 2,
      title: "User groups",
    },
    {
      id: 3,
      title: "Team access level management",
    },
    {
      id: 4,
      title: "Team time tracking reminder emails",
    },
    {
      id: 5,
      title: "Add time for team members",
    },
    {
      id: 6,
      title: "Manage team member billable rates and labor costs",
    },
    {
      id: 7,
      title: "Single Sign-On (SSO)",
    },
  ];
  const reporting = [
    {
      id: 1,
      title: "Exportable Summary, Detailed, and Weekly reports",
    },
    {
      id: 2,
      title: "CSV imports",
    },
    {
      id: 3,
      title: "XLS export",
    },
    {
      id: 4,
      title: "Billable rates",
    },
    {
      id: 5,
      title: "Time rounding for reports",
    },
    {
      id: 6,
      title: "Custom company logo",
    },
    {
      id: 7,
      title: "Saved Reports",
    },
    {
      id: 8,
      title: "Schedule saved reports via email",
    },
    {
      id: 9,
      title: "Set required fields for time entries",
    },
    {
      id: 10,
      title: "Limit tag access",
    },
    {
      id: 11,
      title: "Lock time entries",
    },
    {
      id: 12,
      title: "Historical billable rates",
    },
    {
      id: 13,
      title: "Time entry audits",
    },
  ];

  return (
    <Box w="80%" m="auto">
      <Heading size="2xl" textAlign="center" color="#FFFF" m="50px 0 100px">
        Full Plan Comparison
      </Heading>
      <Box>
        <Flex borderBottom="1px solid #C4BDC7" bg="#FFF3ED">
          <Box w="40%"></Box>
          <Flex w="60%">
            <Box
              w="25%"
              textAlign="center"
              borderLeft="1px solid #C4BDC7"
              p="12px"
            >
              <Heading size="md" color="#2C1338" p="7px 0">
                Free
              </Heading>
              <Button
                p="10px 20px"
                bg="#2C1338"
                borderRadius="50px"
                color="#FFFF"
              >
                Get Started
              </Button>
            </Box>
            <Box
              w="25%"
              textAlign="center"
              borderLeft="1px solid #C4BDC7"
              p="12px"
            >
              <Heading size="md" color="#2C1338" p="7px 0">
                Starter
              </Heading>
              <Button
                p="10px 20px"
                bg="#2C1338"
                borderRadius="50px"
                color="#FFFF"
              >
                Get Started
              </Button>
            </Box>
            <Box
              w="25%"
              position="relative "
              textAlign="center"
              bg="#FCE5D8"
              p="12px"
              borderLeft="1px solid #C4BDC7"
            >
              <Heading size="md" color="#2C1338" p="7px 0">
                Premium
              </Heading>
              <Button
                p="10px 20px"
                bg="#E57CD8"
                borderRadius="50px"
                color="#FFFF"
              >
                Get Started
              </Button>
              <Box
                position="absolute"
                p="7px 0"
                top="-38px"
                left="0"
                right="0"
                bg="#E57CD8"
                color="#FFFF"
              >
                Best Value
              </Box>
            </Box>
            <Box
              w="25%"
              textAlign="center"
              borderLeft="1px solid #C4BDC7"
              p="12px"
            >
              <Heading size="md" color="#2C1338" p="7px 0">
                Enterprice
              </Heading>
              <Button
                p="10px 20px"
                bg="#2C1338"
                borderRadius="50px"
                color="#FFFF"
              >
                Book a demo
              </Button>
            </Box>
          </Flex>
        </Flex>
      </Box>
      <Heading p="15px" bg="#564260" color="#FFF" size="md">
        Time Tracking
      </Heading>
      {timeTracking.map((item) => {
        return (
          <Flex key={item.id} borderBottom="1px solid #C4BDC7" bg="#FFF3ED">
            <Flex
              w="40%"
              justifyContent="space-between"
              p="10px"
              alignItems="center"
            >
              <Text fontSize="14px">{item.title}</Text>
              <InfoOutlineIcon />
            </Flex>
            <Flex w="60%">
              <Box
                w="25%"
                textAlign="center"
                borderLeft="1px solid #C4BDC7"
                p="12px"
              >
                {item.id != 7 && <CheckIcon fontSize="n0px" color="#412A4C" />}
              </Box>
              <Box
                w="25%"
                textAlign="center"
                borderLeft="1px solid #C4BDC7"
                p="12px"
              >
                <CheckIcon fontSize="n0px" color="#412A4C" />
              </Box>
              <Box
                w="25%"
                position="relative "
                textAlign="center"
                bg="#FCE5D8"
                p="12px"
                borderLeft="1px solid #C4BDC7"
              >
                <CheckIcon fontSize="n0px" color="#E57CD8" />
              </Box>
              <Box
                w="25%"
                textAlign="center"
                borderLeft="1px solid #C4BDC7"
                p="12px"
              >
                <CheckIcon fontSize="n0px" color="#412A4C" />
              </Box>
            </Flex>
          </Flex>
        );
      })}
      <Heading p="15px" bg="#564260" color="#FFF" size="md">
        Team Management
      </Heading>
      {timeManagement.map((item) => {
        return (
          <Flex key={item.id} borderBottom="1px solid #C4BDC7" bg="#FFF3ED">
            <Flex
              w="40%"
              justifyContent="space-between"
              p="10px"
              alignItems="center"
            >
              <Text fontSize="14px">{item.title}</Text>
              <InfoOutlineIcon />
            </Flex>
            <Flex w="60%">
              <Box
                w="25%"
                textAlign="center"
                borderLeft="1px solid #C4BDC7"
                p="12px"
              >
                {(item.id == 1 || item.id == 2 || item.id == 3) && (
                  <CheckIcon fontSize="n0px" color="#412A4C" />
                )}
              </Box>
              <Box
                w="25%"
                textAlign="center"
                borderLeft="1px solid #C4BDC7"
                p="12px"
              >
                {(item.id == 1 || item.id == 2 || item.id == 3) && (
                  <CheckIcon fontSize="n0px" color="#412A4C" />
                )}
              </Box>
              <Box
                w="25%"
                position="relative "
                textAlign="center"
                bg="#FCE5D8"
                p="12px"
                borderLeft="1px solid #C4BDC7"
              >
                <CheckIcon fontSize="n0px" color="#E57CD8" />
              </Box>
              <Box
                w="25%"
                textAlign="center"
                borderLeft="1px solid #C4BDC7"
                p="12px"
              >
                <CheckIcon fontSize="n0px" color="#412A4C" />
              </Box>
            </Flex>
          </Flex>
        );
      })}
      <Heading p="15px" bg="#564260" color="#FFF" size="md">
        Reporting
      </Heading>
      {reporting.map((item) => {
        return (
          <Flex key={item.id} borderBottom="1px solid #C4BDC7" bg="#FFF3ED">
            <Flex
              w="40%"
              justifyContent="space-between"
              p="10px"
              alignItems="center"
            >
              <Text fontSize="14px">{item.title}</Text>
              <InfoOutlineIcon />
            </Flex>
            <Flex w="60%">
              <Box
                w="25%"
                textAlign="center"
                borderLeft="1px solid #C4BDC7"
                p="12px"
              >
                {(item.id == 1 || item.id == 2) && (
                  <CheckIcon fontSize="n0px" color="#412A4C" />
                )}
              </Box>
              <Box
                w="25%"
                textAlign="center"
                borderLeft="1px solid #C4BDC7"
                p="12px"
              >
                {item.id <= 7 && <CheckIcon fontSize="n0px" color="#412A4C" />}
              </Box>
              <Box
                w="25%"
                position="relative "
                textAlign="center"
                bg="#FCE5D8"
                p="12px"
                borderLeft="1px solid #C4BDC7"
              >
                <CheckIcon fontSize="n0px" color="#E57CD8" />
              </Box>
              <Box
                w="25%"
                textAlign="center"
                borderLeft="1px solid #C4BDC7"
                p="12px"
              >
                <CheckIcon fontSize="n0px" color="#412A4C" />
              </Box>
            </Flex>
          </Flex>
        );
      })}
    </Box>
  );
};

export default PlanComparison;
