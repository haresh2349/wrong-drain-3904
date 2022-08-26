import { Box, Heading, SimpleGrid, Image, Show, Button, Text, HStack, Spacer, Flex } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import styles from "../whytrack.module.css"

const SmallTeam = () => {
  useEffect(() => {
    document.title = "Time Tracking for Small Teams"
  })
  return (
    <Box>
      <Box>
        <Link to="/track/freelance-time-tracking" >free</Link>
        <br />
        <Link to="/track/time-tracking-small-teams" >small</Link>
        <br />
        <Link to="/track/time-tracking-large-teams" >big</Link>
      </Box>
      <Show above='md'>
        <SimpleGrid columns={2} bgColor="#2c1438" >
          <Box m="auto" p="2rem" >
            <Heading fontSize="62.662px" color="#ffffff"  >
              Small Teams with Big Insights
            </Heading>
            <br />
            <Text fontSize="16.2px" color="#ffffff" >
              Toggl Track is here to save your time—so you can spend it where you want to. That’s our singular focus.
            </Text>
            <br />
            <Button mr="20%" fontSize="14px" p="1.5rem" color="#ffffff" bgColor="#e57cd8" borderRadius="50" >
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
          <Heading textAlign="center" fontSize="62.662px" color="#ffffff"  >
            Small Teams with Big Insights
          </Heading>
          <br />
          <Text textAlign="center" fontSize="16.2px" color="#ffffff" >
            Toggl Track is here to save your time—so you can spend it where you want to. That’s our singular focus.
          </Text>
          <br />
          <Box alignContent="center" >
            <Button textAlign="center" fontSize="14px" p="1.5rem" color="#ffffff" bgColor="#e57cd8" borderRadius="50" >
              Sign up for free
            </Button>
          </Box>
        </Box>
      </Show>
      <Box bgColor="#fef3ed" >
        <Heading fontSize="40px" pl="20%" pr="20%" pt="5rem" textAlign="center" color="#2c1438" >
          Toggl Track delivers insight into your time. Because small teams win big with smart time tracking.
        </Heading>
        <Text fontSize="16.375px" pl="23%" pr="23%" pt="20px" pb="5rem" textAlign="center" color="#2c1438" >
          There are 1,440 minutes each day to work, grow your business, and clock out
        </Text>
      </Box>


      <Show above='md' >
        <HStack bgColor="#fef3ed" pl="7%" pr="7%" >
          <Box maxW="30rem" >
            <Image pb="2rem" src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/6fd04d0ec899de2f8d6ea8d611c7f55f/b79cb/icon-magnify-dark.avif" alt="" />
            <Heading fontSize="25.6px" >Insights like flashlights</Heading>
            <Text fontSize="16.2px" >Track shines a light on your workweek. From profitability projections to earnings-per-client to ROI to milestone setting—Track insights turn small teams into mighty ones.</Text>
          </Box>
          <Spacer />
          <Box>
            <Image maxW="30rem" src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/c479802bb3dcaa4d05deaa9f2bc7f146/3f0bb/feature-graphs.avif" alt="" />
          </Box>
        </HStack>
      </Show>
      <Show below="md"  >
        <Box bgColor="#fef3ed">
          <Image p="20%" src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/c479802bb3dcaa4d05deaa9f2bc7f146/3f0bb/feature-graphs.avif" alt="" />
        </Box>
        <Box p="3rem" bgColor="#fef3ed">
          <Image pb="2rem" src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/6fd04d0ec899de2f8d6ea8d611c7f55f/b79cb/icon-magnify-dark.avif" alt="" />
          <Heading fontSize="25.6px" >Small Teams with Big Insights</Heading>
          <Text fontSize="16.2px" >What you think your workday looks like isn't what it actually looks like. To really understand where your time goes, Track does the hard work for you.</Text>
        </Box>
      </Show>


      <SimpleGrid columns={[1, null, 2]} pt="3rem" pl="7%" pr="7%" bgColor="#fef3ed" >
        <Box   >
          <Image maxW="30rem" src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/4903ee711944ad74a04a462a3eee0a89/8fa3d/feature-team-dashboard.avif" alt="" />
        </Box>
        <Box maxW="30rem" >
          <Image pb="2rem" src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/caf89ee4a474d1385ff4afa8f103b2e9/b79cb/icon-calendar-dark.avif" alt="" />
          <Heading fontSize="25.6px" >Stay accountable inside and outside your team</Heading>
          <Text fontSize="16.2px" >Track uses 360-degree visibility to keep teams accountable—to each other, and to their clients. Create beautiful weekly or monthly reports that clients don't need a PhD to understand. Send email reminders to log hours. Track's seamless reporting creates transparency with one click.</Text>
        </Box>
      </SimpleGrid>


      <Show above='md' >
        <HStack bgColor="#fef3ed" pt="3rem" pl="7%" pr="7%" >
          <Box maxW="30rem">
            <Image pb="2rem" src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/b468810bf2f43552f492da0c744cfdfa/ca913/icon-timeline-dark.avif" alt="" />
            <Heading fontSize="25.6px" >Put your people where they belong</Heading>
            <Text fontSize="16.2px" >No one should be overworked or underworked—least of all, you. With Track's capabilities, get a bird's-eye view into where your team is spending time. Then, reshuffle the work accordingly.</Text>
          </Box>
          <Spacer />
          <Box >
            <Image maxW="30rem" src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/b35ef7e54578a8a6eebf590f54353ea3/ce5a6/feature-calendar.avif" alt="" />
          </Box>
        </HStack>
      </Show>
      <Show below="md" >
        <Box bgColor="#fef3ed" >
          <Image p="20%" src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/b35ef7e54578a8a6eebf590f54353ea3/ce5a6/feature-calendar.avif" alt="" />
        </Box>
        <Box p="3rem" bgColor="#fef3ed" >
          <Image src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/b468810bf2f43552f492da0c744cfdfa/ca913/icon-timeline-dark.avif" alt="" />
          <Heading fontSize="25.6px" >Put your people where they belong</Heading>
          <Text fontSize="16.2px" >No one should be overworked or underworked—least of all, you. With Track's capabilities, get a bird's-eye view into where your team is spending time. Then, reshuffle the work accordingly.</Text>
        </Box>
      </Show>


      <SimpleGrid columns={[1, null, 2]} pt="3rem" pb="5rem" pl="7%" pr="7%" bgColor="#fef3ed"  >
        <Box >
          <Image maxW="30rem" src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/1d75f67b9bac69fe63a659873978936a/af3f3/feature-time-entries.avif" alt="" />
        </Box>
        <Box maxW="30rem" >
          <Image pb="2rem" src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/66f27591a1bb8c35eb25b463d69b9073/73ddc/icon-money-dark.avif" alt="" />
          <Heading fontSize="25.6px" >Fit the bill</Heading>
          <Text fontSize="16.2px" >Don't accept best-guess invoices. Bill with razor-sharp accuracy, down to the minute. Leave behind messy spreadsheets, forgotten time-cards, and disorganized time systems. Never lose another billable hour.</Text>
        </Box>
      </SimpleGrid>

      <Box className={styles.background} >
      </Box>
      <Box width="100%" height="auto" bgColor="#2c1438" >
        <Box m="auto" height="17rem" maxW="90%" style={{ background: 'linear-gradient(to top, #412a4c 50%, #2c1438 50%)' }}  >
          <Image m="auto" maxW="20rem" src="https://public-assets.toggl.com/b/static/291f951779f8d71b540e34c3a137e53d/09977/illo-stopwatch.avif" />
        </Box>
        <Box height="auto" bgColor="#412a4c" m="auto" maxW="90%" >
          <Heading color="#ffffff" maxW="80%" m="auto" pb="2rem" >Studies found that daily time tracking can reduce lost hours from 23% to less than 5% (a recovery of 80%)</Heading>
        </Box>
        <Box mt="5rem">
          <Heading color="#ffffff" maxW="50%" m="auto" textAlign="center" >5M+ users trust Toggl Track to optimize their time</Heading>
        </Box>
        <Box m="auto" maxW="30rem" mt="4rem" pb="15rem" >
          <Flex flexWrap="wrap"  >
            <Box bgColor="#e57cd8" p="1rem" m="auto" color="#ffffff" border="1px solid #e57cd8" borderRadius="2rem" _hover="white" >
              Start tracking for free
            </Box>
            <Spacer />
            <Box color="#ffffff" p="1rem" m="auto" >
              Discover more features
            </Box>
          </Flex>
        </Box>
      </Box>





      <Box bgColor="#fef3ed" >
        <Heading p="3rem" textAlign="center" color="#412a4c" >
        Toggl Track is trusted by teams of 1 to 10,000
        </Heading>
        <Text textAlign="center" color="#412a4c" >
        Our users range from solo flyers to enterprise empires
        </Text>

        <Box p="3rem">
          <Image m="auto" src="https://public-assets.toggl.com/b/static/9fb3a1186df5584b2b04959828b1dd7f/6b702/small-teams-logos-desktop.avif" />
        </Box>
      </Box>



      <Box height="auto" style={{ background: 'linear-gradient(to bottom, #fef3ed 65%, #412a4c 35%)' }} >
        <Image m="auto" src="https://public-assets.toggl.com/b/static/49dea14306b1dd116edde949641b8c68/c9507/illo-megaphone.avif" />
      </Box>
      <Box bgColor="#412a4c" pb="5rem">
        <Box m="auto" maxW="40rem" pt="3rem" >
          <Heading textAlign="center" fontSize="35.4px" color="#e57cd8"  >Users love us!</Heading>
          <Heading textAlign="center" fontSize="19.2px" color="#ffffff" >And we know you will too</Heading>
        </Box>
      </Box>





      <Box bgColor="#412a4c" border="1px solid #412a4c" >

        <Box alignItems='left' bgColor="#ffffff" maxW="60rem" ml="3rem" mr="3rem" >
          <Heading p="2rem" fontSize="25.6px" color="#2C1338" >
          "Toggl Track saved Platinum $18,000 by making it possible to see that some client project hours were missing."
          </Heading>
          <Text textAlign="center" color="#e57cd8" >Rich Tuckwell-Skuda</Text>
          <Text textAlign="center" color="#e57cd8" >Platiunm Companies</Text>

        </Box>

        <Box maxW="60rem" ml="3rem" mr="3rem" style={{ background: 'linear-gradient(to bottom, #ffffff 50%, #412a4c 50%)' }} >
          <Image m="auto" maxW="3rem" src="https://public-assets.toggl.space/cd2402f7-2f3f-4b30-bd89-5b4edb39f68d/static/2dd69ca1be41c96dfa96f07976d78ecf/ae292/people-platinum.avif" />
        </Box>




        <Box alignItems='end' bgColor="#ffffff" maxW="60rem" ml="3rem" mt="5rem" mr="3rem" >
          <Heading p="2rem" fontSize="25.6px" color="#2C1338" >
          "Toggl Track has been useful in letting use know how much time each task takes. We used to just estimate time for a project/task. Now we actually have data to look through."
          </Heading>
          <Text textAlign="center" color="#e57cd8" >Bunker Creative</Text>
          <Text textAlign="center" color="#e57cd8" >Design agency in Landon</Text>

        </Box>

        <Box maxW="60rem" ml="3rem" mr="3rem"  style={{ background: 'linear-gradient(to bottom, #ffffff 50%, #412a4c 50%)' }} >
          <Image m="auto" maxW="3rem" src="https://public-assets.toggl.space/cd2402f7-2f3f-4b30-bd89-5b4edb39f68d/static/f818217bbc4922cbed0fb25d63be125f/b6d1c/brand-bunkercreative.avif" />
        </Box>


        <Box height="5rem" />

        <Box style={{ background: 'linear-gradient(to bottom, #412a4c 30%, #564260 30%)' }} >
          <Image m="auto" src="https://public-assets.toggl.com/b/static/50743fb0844854055a48bfacbe48040d/f13d4/reviews-badge-desktop.avif" />
        </Box>

      </Box>



    </Box>
  )
}

export default SmallTeam