import { Box, Heading, SimpleGrid, Image, Show, Button, Text , HStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'


const SmallTeam = () => {
  useEffect(() => {
    document.title = "Time Tracking for Freelancers"
  })
  return (
    <Box>
      <Show above='md'>
        <SimpleGrid columns={2} bgColor="#2c1438" >
          <Box m="auto" p="2rem" >
            <Heading fontSize="43.316px" color="#ffffff"  >
              Insights like flashlights
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
            <Image src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/b269cbb579f2789a1cd6c2c321e254fd/a92d8/hero-small-teams.avif" alt="" />
          </Box>
        </SimpleGrid>
      </Show>
      <Show below='md'>
        <Box m="auto" p="3rem" bgColor="#2c1438" >
          <Heading textAlign="center" fontSize="43.316px" color="#ffffff"  >
            Insights like flashlights
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
          Toggl Track delivers insight into your time. Because small teams win big with smart time tracking.
        </Heading>
        <Text fontSize="16.375px" pl="18%" pr="18%" pt="20px" pb="5rem" textAlign="center" color="#2c1438" >
          There are 1,440 minutes each day to work, grow your business, and clock out
        </Text>
      </Box>


      <Show above='md' >
        <HStack bgColor="#fef3ed" >
          <Box p="3rem">
            <Image src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/6fd04d0ec899de2f8d6ea8d611c7f55f/b79cb/icon-magnify-dark.avif" alt="" />
            <Heading>Insights like flashlights</Heading>
            <Text>Track shines a light on your workweek. From profitability projections to earnings-per-client to ROI to milestone setting—Track insights turn small teams into mighty ones.</Text>
          </Box>
          <Box>
            <Image src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/c479802bb3dcaa4d05deaa9f2bc7f146/3f0bb/feature-graphs.avif" alt="" />
          </Box>
        </HStack>
      </Show>
      <Show below="md"  >
        <Box bgColor="#fef3ed">
          <Image src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/c479802bb3dcaa4d05deaa9f2bc7f146/3f0bb/feature-graphs.avif" alt="" />
        </Box>
        <Box p="3rem" bgColor="#fef3ed">
          <Image src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/6fd04d0ec899de2f8d6ea8d611c7f55f/b79cb/icon-magnify-dark.avif" alt="" />
          <Heading>Insights like flashlights</Heading>
          <Text>What you think your workday looks like isn't what it actually looks like. To really understand where your time goes, Track does the hard work for you.</Text>
        </Box>
      </Show>
      <SimpleGrid columns={[1, null, 2]} >
        <Box p="3rem" bgColor="#fef3ed" >
          <Image src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/4903ee711944ad74a04a462a3eee0a89/8fa3d/feature-team-dashboard.avif" alt="" />

        </Box>
        <Box p="3rem" bgColor="#fef3ed" >
          <Image src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/caf89ee4a474d1385ff4afa8f103b2e9/b79cb/icon-calendar-dark.avif" alt="" />
          <Heading>Stay accountable inside and outside your team</Heading>
          <Text>Track uses 360-degree visibility to keep teams accountable—to each other, and to their clients. Create beautiful weekly or monthly reports that clients don't need a PhD to understand. Send email reminders to log hours. Track's seamless reporting creates transparency with one click.</Text>
        </Box>
      </SimpleGrid>
      <Show above='md' >
        <HStack bgColor="#fef3ed" >
          <Box p="3rem">
            <Image src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/b468810bf2f43552f492da0c744cfdfa/ca913/icon-timeline-dark.avif" alt="" />
            <Heading>Put your people where they belong</Heading>
            <Text>No one should be overworked or underworked—least of all, you. With Track's capabilities, get a bird's-eye view into where your team is spending time. Then, reshuffle the work accordingly.</Text>
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
            <Heading>Put your people where they belong</Heading>
            <Text>No one should be overworked or underworked—least of all, you. With Track's capabilities, get a bird's-eye view into where your team is spending time. Then, reshuffle the work accordingly.</Text>
          </Box>
      </Show>
      <SimpleGrid columns={[1, null, 2]} >
        <Box p="3rem" bgColor="#fef3ed" >
          <Image src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/1d75f67b9bac69fe63a659873978936a/af3f3/feature-time-entries.avif" alt="" />

        </Box>
        <Box p="3rem" bgColor="#fef3ed" >
          <Image src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/66f27591a1bb8c35eb25b463d69b9073/73ddc/icon-money-dark.avif" alt="" />
          <Heading>Fit the bill</Heading>
          <Text>Don't accept best-guess invoices. Bill with razor-sharp accuracy, down to the minute. Leave behind messy spreadsheets, forgotten time-cards, and disorganized time systems. Never lose another billable hour.</Text>
        </Box>
      </SimpleGrid>

    </Box>
  )
}

export default SmallTeam