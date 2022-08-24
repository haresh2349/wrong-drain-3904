import { Box, Heading, SimpleGrid, Image, Show, Button, Text, HStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'

const Freelancer = () => {
  useEffect(() => {
    document.title = "Time Tracking for Freelancers"
  })
  return (
    <Box>
      <Show above='md'>
        <SimpleGrid columns={2} bgColor="#2c1438" >
          <Box m="auto" p="2rem" >
            <Heading fontSize="43.316px" color="#ffffff"  >
              Accurate, Beautiful Time Tracking. It's Simple.
            </Heading>
            <br />
            <Heading fontSize="16.2px" color="#ffffff" >
              Toggl Track is here to save your time—so you can spend it where you want to. That’s our singular focus.
            </Heading>
            <br />
            <Button mr="20%" fontSize="16px" color="#ffffff" bgColor="#e57cd8" borderRadius="50" >
              Sign up for free
            </Button>
          </Box>
          <Box>
            <Image src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/8d06ace628e1cadfc31838320c477118/0fc98/hero-freelancers.avif" alt="" />
          </Box>
        </SimpleGrid>
      </Show>
      <Show below='md'>
        <Box m="auto" p="3rem" bgColor="#2c1438" >
          <Heading textAlign="center" fontSize="43.316px" color="#ffffff"  >
            Accurate, Beautiful Time Tracking. It's Simple.
          </Heading>
          <br />
          <Heading textAlign="center" fontSize="16.2px" color="#ffffff" >
            Toggl Track is here to save your time—so you can spend it where you want to. That’s our singular focus.
          </Heading>
          <br />
          <Box alignContent="center" >
            <Button textAlign="center" fontSize="16px" color="#ffffff" bgColor="#e57cd8" borderRadius="50" >
              Sign up for free
            </Button>
          </Box>
        </Box>
      </Show>
      <Box bgColor="#fef3ed" >
        <Heading fontSize="45.85px" pl="10%" pr="10%" pt="5rem" textAlign="center" color="#2c1438" >
          With beautiful reports and easy customization, you'll never lose a minute of your creative time
        </Heading>
        <Text fontSize="16.375px" pl="18%" pr="18%" pt="20px" pb="5rem" textAlign="center" color="#2c1438" >
          We know that when you work as a team of one, every moment is mission-critical. That's where Track comes in.
        </Text>
      </Box>
      <Show above='md' >
        <HStack bgColor="#fef3ed" >
          <Box p="3rem">
            <Image src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/6fd04d0ec899de2f8d6ea8d611c7f55f/b79cb/icon-magnify-dark.avif" alt="" />
            <Heading>Understand how long projects really take</Heading>
            <Text>What you think your workday looks like isn't what it actually looks like. To really understand where your time goes, Track does the hard work for you.</Text>
          </Box>
          <Box>
            <Image src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/c479802bb3dcaa4d05deaa9f2bc7f146/3f0bb/feature-graphs.avif" alt="" />
          </Box>
        </HStack>
      </Show>
      <Show below="md" >
        <Box bgColor="#fef3ed" >
          <Image src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/c479802bb3dcaa4d05deaa9f2bc7f146/3f0bb/feature-graphs.avif" alt="" />
        </Box>
        <Box p="3rem" bgColor="#fef3ed" >
          <Image src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/6fd04d0ec899de2f8d6ea8d611c7f55f/b79cb/icon-magnify-dark.avif" alt="" />
          <Heading>Understand how long projects really take</Heading>
          <Text>What you think your workday looks like isn't what it actually looks like. To really understand where your time goes, Track does the hard work for you.</Text>
        </Box>
      </Show>
      <SimpleGrid columns={[1, null, 2]} >
        <Box p="3rem" bgColor="#fef3ed" >
          <Image src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/1d75f67b9bac69fe63a659873978936a/af3f3/feature-time-entries.avif" alt="" />

        </Box>
        <Box p="3rem" bgColor="#fef3ed" >
          <Image src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/66f27591a1bb8c35eb25b463d69b9073/73ddc/icon-money-dark.avif" alt="" />
          <Heading>Create accurate invoices easily</Heading>
          <Text>There’s no dread like end-of-the-month, time-to-create-invoices dread. Toggl Track takes your hours logged, and turns them into clean reports. You’ll know exactly where you spent your time—and how to bill it—cha-ching!</Text>
        </Box>
      </SimpleGrid>
      <Show above='md' >
        <HStack bgColor="#fef3ed" >
          <Box p="3rem">
            <Image src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/b468810bf2f43552f492da0c744cfdfa/ca913/icon-timeline-dark.avif" alt="" />
            <Heading>Stay accountable every day</Heading>
            <Text>Don't wait for your clients to ask, "What is it that you do all day?" Toggl Track is the easiest way to stay accountable, even when nobody's asking.</Text>
          </Box>
          <Box>
            <Image src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/b35ef7e54578a8a6eebf590f54353ea3/ce5a6/feature-calendar.avif" alt="" />
          </Box>
        </HStack>
      </Show>
      <Show below="md" >
        <Box bgColor="#fef3ed" >
          <Image src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/b35ef7e54578a8a6eebf590f54353ea3/ce5a6/feature-calendar.avif" alt="" />
        </Box>
        <Box p="3rem" bgColor="#fef3ed" >
          <Image src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/b468810bf2f43552f492da0c744cfdfa/ca913/icon-timeline-dark.avif" alt="" />
          <Heading>Stay accountable every day</Heading>
          <Text>Don't wait for your clients to ask, "What is it that you do all day?" Toggl Track is the easiest way to stay accountable, even when nobody's asking.</Text>
        </Box>
      </Show>
      <SimpleGrid columns={[1, null, 2]} >
        <Box p="3rem" bgColor="#fef3ed" >
          <Image src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/e335fd772212c6144a8f4e02609d0d0c/10316/feature-reminders.avif" alt="" />

        </Box>
        <Box p="3rem" bgColor="#fef3ed" >
          <Image src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/caf89ee4a474d1385ff4afa8f103b2e9/b79cb/icon-calendar-dark.avif" alt="" />
          <Heading>Efficiency in practice</Heading>
          <Text>You don't need another chore. Track isn't another tool you dread opening. There's no onboarding required. Track will even remind you to pause or clock out. Because your well-being is just as important as your to-do list.</Text>
        </Box>
      </SimpleGrid>
    </Box>
  )
}

export default Freelancer