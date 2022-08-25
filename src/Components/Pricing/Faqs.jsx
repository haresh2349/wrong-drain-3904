import React, { useState } from "react";
import {
  Box,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  HStack,
  Text,
  Stack,
  Input,
  Button,
} from "@chakra-ui/react";
import { BsApple, BsGoogle } from "react-icons/bs";
import { FiEye } from "react-icons/fi";
const Faqs = () => {
  const [bgColor, setBgColor] = useState(false);
  const faqs = [
    {
      id: 1,
      que: "Is Toggl Track free for an unlimited number of users?",
      ans: "You will be charged a monthly fee for each member of your team. For paid plans, this fee applies even if you have under 5 active users. You will not be charged for deactivated users. If you deactivate a user, all data associated with the deactivated user will be retained.",
    },
    {
      id: 2,
      que: "How is the subscription fee calculated for paid plans?",
      ans: "You will be charged a monthly fee for each member of your team. For paid plans, this fee applies even if you have under 5 active users. You will not be charged for deactivated users. If you deactivate a user, all data associated with the deactivated user will be retained.",
    },
    {
      id: 3,
      que: "You mentioned that Toggl Track is free for up to 5 users. If I’m on a paid plan, do I only need to pay for the 6th user?",
      ans: "No, you will have to pay for all 6 members on your plan. We charge for every user because all users benefit from the extra features enabled by paid plans, not just the 6th. For example, all users can create Tasks or assign entries as Billable—all paid plan features.",
    },
    {
      id: 4,
      que: "Does Toggl Track offer discounts?",
      ans: "Yes, Toggl Track offers discounts for nonprofits, students, and educational institutions. Visit this page to see if you can qualify. For those who do not qualify, Toggl Track offers a volume discount for large teams if you purchase a yearly subscription.",
    },
    {
      id: 5,
      que: "It keeps taking me to a page where it says I’m signing up for a trial of Premium. I’d just like to sign up for a Free plan.",
      ans: "Regardless of the plan, all new users get to try out our Premium features for free—for 30 days. You will not be asked to provide any billing information. When the 30 days are up, you’ll automatically lose access to the Premium features, but you can continue using Track on the Free plan.",
    },
    {
      id: 6,
      que: "If I sign up for a Free plan but add 6 users to my Workspace during my free Premium trial, what will happen to the 6th user once the 30 days are up?",
      ans: "All users will remain in the Workspace and all time tracking data will remain intact. However, once you’re back on the Free plan, the Workspace will be frozen and no one will be able to track time. To unfreeze the Workspace, reduce the number of active users to 5.",
    },
    {
      id: 7,
      que: "If I use your Premium features during the trial, what happens to all the data related to paid features (Tasks, Billable Rates, etc.) once my Workspace downgrades to the Free plan?",
      ans: "The data entered during the trial will be hidden, but not removed or deleted. If you upgrade to a paid plan sometime in the future, the data will become visible again. All the time entries will remain visible—only the associated data from paid features such as Tasks will be hidden.",
    },
    {
      id: 8,
      que: "Does Toggl Track have desktop or mobile apps? Are they free?",
      ans: "Yes, we’re on desktop and mobile. We have desktop apps for Windows and macOS, and mobile apps for iOS and Android. All of our apps are free to download and use.",
    },
    {
      id: 9,
      que: "If I have a paid Toggl Plan subscription, do I need to pay for Toggl Track?",
      ans: "Your Toggl Plan subscription will not influence your Toggl Track payment plan. You will need to sign up for a separate Toggl Track account even if you have a Toggl Plan account, and you will be billed separately according to the Toggl Track plan you’re on.If you have a paid Toggl Plan subscription, you can take advantage of the Toggl Plan and Track integration to track time within Plan.",
    },
  ];
  return (
    <Box w="100%" p="80px 30px" bg="#412A4C">
      <Box w="80%" m="auto">
        <Heading color={"#E57CD8"} size="2xl" textAlign="center" mb="60px">
          FAQS
        </Heading>
        <Accordion
          color="#FCE5D8"
          borderColor="#2C1338"
          //   defaultIndex={[0]}
          allowMultiple
        >
          {faqs.map((el, index) => {
            return (
              <AccordionItem bg={bgColor && el.id == index + 1 && "#E57CD8"}>
                <Heading as="h2" size="xl">
                  <AccordionButton padding="30px">
                    <Box flex="1" textAlign="left" fontSize={"24px"}>
                      {el.que}
                    </Box>
                    <AccordionIcon
                    //   onClick={() => {
                    //     if (el.id == index + 1) {
                    //       setBgColor(!bgColor);
                    //     }
                    //   }}
                    />
                  </AccordionButton>
                </Heading>
                <AccordionPanel pb={4}>{el.ans}</AccordionPanel>
              </AccordionItem>
            );
          })}
        </Accordion>
      </Box>
      <Box w="80%" m="50px auto" bg="#FCE5D8" p="25px 30px">
        <Heading size="lg" color="#412A4C" p="10px 0">
          Sign up for{" "}
          <Text color="#E57CD8" transform="rotate(45deg)" as="span">
            free
          </Text>
          . No credit card required.
        </Heading>
        <HStack justifyContent="space-arround">
          <Stack border="1px solid #808080">
            <Input placeholder="Email" border="none" />
          </Stack>
          <HStack border="1px solid #808080" p="0 10px">
            <Input placeholder="A strong password" border="none" />
            <FiEye />
          </HStack>
          <Button bg="#E57CD8" borderRadius="50px" p="10px 20px">
            Sign up with email
          </Button>
          <HStack>
            <Text>Or sign up with : </Text>
            <Box borderRadius="50%" w="50px" bg="#FFFF" p="10px">
              <BsGoogle fontSize="30px" />
            </Box>
            <Box borderRadius="50%" w="50px" bg="#FFFF" p="10px">
              <BsApple fontSize="30px" />
            </Box>
          </HStack>
        </HStack>
        <Text fontSize="14px" p="15px 0">
          By signing up, you agree to our{" "}
          <Text as="span" borderBottom="0.5px solid #E57CD8">
            terms of service
          </Text>
          ,{" "}
          <Text as="span" borderBottom="0.5px solid #E57CD8">
            privacy policy
          </Text>{" "}
          and to receiving marketing communication from Toggl Track. You can opt
          out anytime.
        </Text>
      </Box>
      <HStack
        fontSize="18px"
        color="#FCE5D8"
        justifyContent="center"
        gridGap="10px"
      >
        <Text>Onboarding a team?</Text>
        <Text fontSize="16px" color="#E57CD8" aS="span">{`Book a demo >`}</Text>
      </HStack>
    </Box>
  );
};

export default Faqs;
