import { Box, Heading, SimpleGrid, Image, Show, Button, Text, HStack, Spacer, Flex } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import styles from "../whytrack.module.css"

const BigTeam = () => {
  useEffect(() => {
    document.title = "Time Tracking for Large Teams"
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
              Time Will Tell (If You Track It)
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
            <Image src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/79e1ffc8fb5fba4debd371fb0ef251d8/c4eba/hero-large-teams.avif" alt="" />
          </Box>
        </SimpleGrid>
      </Show>
      <Show below='md'>
        <Box m="auto" p="3rem" bgColor="#2c1438" >
          <Heading textAlign="center" fontSize="62.662px" color="#ffffff"  >
            Accurate, Beautiful Time Tracking. It's Simple.
          </Heading>
          <br />
          <Text textAlign="center" fontSize="16.2px" color="#ffffff" >
            Toggl Track is here to save your time—so you can spend it where you want to. That’s our singular focus.
          </Text>
          <br />
          <Box alignContent="center" >
            <Button textAlign="center" p="1.5rem" fontSize="14px" color="#ffffff" bgColor="#e57cd8" borderRadius="50" >
              Sign up for free
            </Button>
          </Box>
        </Box>
      </Show>


      <Box bgColor="#fef3ed" pl="10%" pr="10%" >
        <Heading fontSize="40px" pl="10%" pr="10%" pt="5rem" textAlign="center" color="#2c1438" >
          Save time, manage your team, and plan better. All with just a few clicks.
        </Heading>
        <Text fontSize="16.375px" pl="18%" pr="18%" pt="20px" pb="5rem" textAlign="center" color="#2c1438" >
          Time is the most powerful force in the universe. Toggl Track helps you harness it. Listen closely: your minutes are telling an important story.
        </Text>
      </Box>



      <Show above='md'   >
        <HStack bgColor="#fef3ed" pl="7%" pr="7%" >
          <Box maxW="33rem" p="2rem">
            <Image pb="2rem" src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/6fd04d0ec899de2f8d6ea8d611c7f55f/b79cb/icon-magnify-dark.avif" alt="" />
            <Heading fontSize="25.6px" >Drive discovery with data</Heading>
            <Text fontSize="16.2px" >You used to have ideas about where your time goes. Now you have proof. With data-driven insights, Track shows whether your expectations match the reality. Because we only like surprises at birthday parties.</Text>
          </Box>
          <Spacer />
          <Box >
            <Image maxW="30rem" src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/c479802bb3dcaa4d05deaa9f2bc7f146/3f0bb/feature-graphs.avif" alt="" />
          </Box>
        </HStack>
      </Show>
      <Show below="md"  >
        <Box bgColor="#fef3ed" >
          <Image p="20%" src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/c479802bb3dcaa4d05deaa9f2bc7f146/3f0bb/feature-graphs.avif" alt="" />
        </Box>
        <Box p="3rem" bgColor="#fef3ed" >
          <Image pb="2rem" src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/6fd04d0ec899de2f8d6ea8d611c7f55f/b79cb/icon-magnify-dark.avif" alt="" />
          <Heading fontSize="25.6px" >Drive discovery with data</Heading>
          <Text fontSize="16.2px" >You used to have ideas about where your time goes. Now you have proof. With data-driven insights, Track shows whether your expectations match the reality. Because we only like surprises at birthday parties.</Text>
        </Box>
      </Show>


      <SimpleGrid columns={[1, null, 2]} pt="3rem" pl="7%" pr="7%" bgColor="#fef3ed"   >
        <Box p="3rem" >
          <Image maxW="30rem" src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/4903ee711944ad74a04a462a3eee0a89/8fa3d/feature-team-dashboard.avif" alt="" />

        </Box>
        <Box maxW="33rem" p="2rem"  >
          <Image pb="2rem" src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/caf89ee4a474d1385ff4afa8f103b2e9/b79cb/icon-calendar-dark.avif" alt="" />
          <Heading fontSize="25.6px" >Stay on track, automatically</Heading>
          <Text fontSize="16.2px" >Why spend man-hours on admin and compliance? Automate with Track. Whether you're navigating GDPR or your own internal standards—Track has you covered. Track's simple, breezy interface delivers powerful, enterprise-level reporting.</Text>
        </Box>
      </SimpleGrid>


      <Show above='md'  >
        <HStack bgColor="#fef3ed" p="3rem" pl="7%" pr="7%" >
          <Box maxW="33rem" p="2rem">
            <Image pb="2rem" src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/b468810bf2f43552f492da0c744cfdfa/ca913/icon-timeline-dark.avif" alt="" />
            <Heading fontSize="25.6px" >Be a well-oiled machine</Heading>
            <Text fontSize="16.2px" >Banish "underworked" and "overworked" at once. Analyze your time reports and assign work to those with bandwidth. Estimate timelines and ROI, so your lightweight team packs a heavyweight punch. Because happy teams make clients even happier.</Text>
          </Box>
          <Spacer />
          <Box>
            <Image maxW="30rem" src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/b35ef7e54578a8a6eebf590f54353ea3/ce5a6/feature-calendar.avif" alt="" />
          </Box>
        </HStack>
      </Show>
      <Show below="md"  >
        <Box bgColor="#fef3ed" >
          <Image p="20%" src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/b35ef7e54578a8a6eebf590f54353ea3/ce5a6/feature-calendar.avif" alt="" />
        </Box>
        <Box maxW="33rem" p="2rem" bgColor="#fef3ed" >
          <Image src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/b468810bf2f43552f492da0c744cfdfa/ca913/icon-timeline-dark.avif" alt="" />
          <Heading fontSize="25.6px" >Be a well-oiled machine</Heading>
          <Text fontSize="16.2px" >Banish "underworked" and "overworked" at once. Analyze your time reports and assign work to those with bandwidth. Estimate timelines and ROI, so your lightweight team packs a heavyweight punch. Because happy teams make clients even happier.</Text>
        </Box>
      </Show>



      <SimpleGrid columns={[1, null, 2]} pt="3rem" pb="5rem" pl="7%" pr="7%" bgColor="#fef3ed"  >
        <Box  >
          <Image maxW="30rem" src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/1d75f67b9bac69fe63a659873978936a/af3f3/feature-time-entries.avif" alt="" />

        </Box>
        <Box maxW="33rem" >
          <Image pb="2rem" src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/66f27591a1bb8c35eb25b463d69b9073/73ddc/icon-money-dark.avif" alt="" />
          <Heading fontSize="25.6px" >Bill better</Heading>
          <Text fontSize="16.2px" >To bill, or not to bill? That is the question. Toggl Track is simple to use, so your billing is fast and accurate. Understand the split between billable and non-billable time for everyone on your team, and charge out accurately.</Text>
        </Box>
      </SimpleGrid>


      <Box className={styles.background} >
      </Box>
      <Box width="100%" height="auto" bgColor="#2c1438" >
        <Box m="auto" height="17rem" maxW="90%" style={{ background: 'linear-gradient(to top, #412a4c 50%, #2c1438 50%)' }}  >
          <Image m="auto" maxW="20rem" src="https://public-assets.toggl.com/b/static/291f951779f8d71b540e34c3a137e53d/09977/illo-stopwatch.avif" />
        </Box>
        <Box height="auto" bgColor="#412a4c" m="auto" maxW="90%" >
          <Heading color="#ffffff" maxW="80%" m="auto" pb="2rem" >With Toggl Track, individuals captured an additional 25% of billable hours that would otherwise be lost</Heading>
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
          <Image m="auto" src="https://public-assets.toggl.com/b/static/25b9283085ba538ba7d06ee114cdf965/67324/large-teams-logos-desktop.avif" />
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

        <Flex justify="flex-start" >
          <Box>
            <Box alignItems='left' bgColor="#ffffff" maxW="60rem" ml="3rem" mr="3rem" >
              <Heading p="2rem" fontSize="25.6px" color="#2C1338" >
                "We won business with clients like Uber and other Fortune 500s by bringing Toggl Track reports to our pitches."
              </Heading>
              <Text textAlign="center" color="#e57cd8" >David Jackson</Text>
              <Text textAlign="center" color="#e57cd8" >Full Stack Labs</Text>
            </Box>
            <Box maxW="60rem" ml="3rem" mr="3rem" style={{ background: 'linear-gradient(to bottom, #ffffff 50%, #412a4c 50%)' }} >
              <Image m="auto" maxW="3rem" src="https://public-assets.toggl.space/cd2402f7-2f3f-4b30-bd89-5b4edb39f68d/static/584502a980fa2dd5de884f9060a8eed0/81307/people-fullstack.avif" />
            </Box>
          </Box>
        </Flex>


        <Flex justify="flex-end" >
          <Box>
            <Box alignItems='end' bgColor="#ffffff" maxW="60rem" ml="3rem" mt="5rem" mr="3rem">
              <Heading p="2rem" fontSize="25.6px" color="#2C1338" >
                "Toggl Track saved each team member 20 minutes per day, and delivered extensive data about which projects they worked on. Cumulatively, it's been huge."
              </Heading>
              <Text textAlign="center" color="#e57cd8" >Stephen Wierenga</Text>
              <Text textAlign="center" color="#e57cd8" >Perception</Text>

            </Box>

            <Box maxW="60rem" ml="3rem" mr="3rem" style={{ background: 'linear-gradient(to bottom, #ffffff 50%, #412a4c 50%)' }} >
              <Image m="auto" maxW="3rem" src="https://public-assets.toggl.space/cd2402f7-2f3f-4b30-bd89-5b4edb39f68d/static/f7987922cfe044f723e01b8ae260cf98/81307/people-perception.avif" />
            </Box>
          </Box>
        </Flex>

        <Box height="5rem" />

        <Box style={{ background: 'linear-gradient(to bottom, #412a4c 30%, #564260 30%)' }} >
          <Image m="auto" src="https://public-assets.toggl.com/b/static/50743fb0844854055a48bfacbe48040d/f13d4/reviews-badge-desktop.avif" />
        </Box>

      </Box>

    </Box>
  )
}

export default BigTeam
