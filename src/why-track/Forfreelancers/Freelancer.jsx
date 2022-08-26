import { Box, Heading, SimpleGrid, Image, Show, Button, Text, HStack, Spacer, Flex } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import styles from "../whytrack.module.css"
const Freelancer = () => {
  useEffect(() => {
    document.title = "Time Tracking for Freelancers"
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
              Accurate, Beautiful Time Tracking. It's Simple.
            </Heading>
            <br />
            <Text fontSize="16.2px" color="#ffffff" >
              Toggl Track is here to save your time—so you can spend it where you want to. That’s our singular focus.
            </Text>
            <br />
            <Button p="1.5rem" mr="20%" fontSize="14px" color="#ffffff" bgColor="#e57cd8" borderRadius="50" >
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
          <Heading textAlign="center" fontSize="40px" color="#ffffff"  >
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


      <Box bgColor="#fef3ed" >
        <Heading fontSize="40px" pl="20%" pr="20%" pt="5rem" textAlign="center" color="#2c1438" >
          With beautiful reports and easy customization, you'll never lose a minute of your creative time
        </Heading>
        <Text fontSize="16.375px" pl="23%" pr="23%" pt="20px" pb="5rem" textAlign="center" color="#2c1438" >
          We know that when you work as a team of one, every moment is mission-critical. That's where Track comes in.
        </Text>
      </Box>


      <Show above='md' >
        <HStack bgColor="#fef3ed" pl="5%" pr="5%" >
          <Box maxW="30rem" >
            <Image pb="2rem" src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/6fd04d0ec899de2f8d6ea8d611c7f55f/b79cb/icon-magnify-dark.avif" alt="" />
            <Heading fontSize="25.6px" >Understand how long projects really take</Heading>
            <Text fontSize="16.2px" >What you think your workday looks like isn't what it actually looks like. To really understand where your time goes, Track does the hard work for you.</Text>
          </Box>
          <Spacer />
          <Box >
            <Image maxW="30rem" src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/c479802bb3dcaa4d05deaa9f2bc7f146/3f0bb/feature-graphs.avif" alt="" />
          </Box>
        </HStack>
      </Show>
      <Show below="md" >
        <Box bgColor="#fef3ed" >
          <Image p="20%" src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/c479802bb3dcaa4d05deaa9f2bc7f146/3f0bb/feature-graphs.avif" alt="" />
        </Box>
        <Box p="3rem" bgColor="#fef3ed" >
          <Image pb="2rem" src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/6fd04d0ec899de2f8d6ea8d611c7f55f/b79cb/icon-magnify-dark.avif" alt="" />
          <Heading fontSize="25.6px" >Understand how long projects really take</Heading>
          <Text fontSize="16.2px" >What you think your workday looks like isn't what it actually looks like. To really understand where your time goes, Track does the hard work for you.</Text>
        </Box>
      </Show>


      <SimpleGrid columns={[1, null, 2]} pt="3rem" pl="5%" pr="5%" bgColor="#fef3ed" >
        <Box>
          <Image maxW="30rem" src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/1d75f67b9bac69fe63a659873978936a/af3f3/feature-time-entries.avif" alt="" />

        </Box>
        <Box>
          <Image pb="2rem" src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/66f27591a1bb8c35eb25b463d69b9073/73ddc/icon-money-dark.avif" alt="" />
          <Heading fontSize="25.6px" >Create accurate invoices easily</Heading>
          <Text fontSize="16.2px" >There’s no dread like end-of-the-month, time-to-create-invoices dread. Toggl Track takes your hours logged, and turns them into clean reports. You’ll know exactly where you spent your time—and how to bill it—cha-ching!</Text>
        </Box>
      </SimpleGrid>


      <Show above='md' >
        <HStack bgColor="#fef3ed" pt="3rem" pl="5%" pr="5%" >
          <Box maxW="30rem">
            <Image pb="2rem" src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/b468810bf2f43552f492da0c744cfdfa/ca913/icon-timeline-dark.avif" alt="" />
            <Heading fontSize="25.6px" >Stay accountable every day</Heading>
            <Text fontSize="16.2px" >Don't wait for your clients to ask, "What is it that you do all day?" Toggl Track is the easiest way to stay accountable, even when nobody's asking.</Text>
          </Box>
          <Spacer />
          <Box>
            <Image  maxW="30rem" src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/b35ef7e54578a8a6eebf590f54353ea3/ce5a6/feature-calendar.avif" alt="" />
          </Box>
        </HStack>
      </Show>
      <Show below="md" >
        <Box bgColor="#fef3ed" >
          <Image p="20%" src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/b35ef7e54578a8a6eebf590f54353ea3/ce5a6/feature-calendar.avif" alt="" />
        </Box>
        <Box p="3rem" bgColor="#fef3ed" >
          <Image pb="2rem" src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/b468810bf2f43552f492da0c744cfdfa/ca913/icon-timeline-dark.avif" alt="" />
          <Heading fontSize="25.6px" >Stay accountable every day</Heading>
          <Text fontSize="16.2px" >Don't wait for your clients to ask, "What is it that you do all day?" Toggl Track is the easiest way to stay accountable, even when nobody's asking.</Text>
        </Box>
      </Show>


      <SimpleGrid columns={[1, null, 2]} m="auto" pt="3rem" pb="2rem" pl="5%" pr="5%" bgColor="#fef3ed"  >
        <Box>
          <Image  maxW="30rem" src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/e335fd772212c6144a8f4e02609d0d0c/10316/feature-reminders.avif" alt="" />
        </Box>
        <Box>
          <Image pb="2rem" src="https://public-assets.toggl.space/6a88715f-52fe-4e26-99f5-744dd5f5b092/static/caf89ee4a474d1385ff4afa8f103b2e9/b79cb/icon-calendar-dark.avif" alt="" />
          <Heading fontSixe="25.6px" >Efficiency in practice</Heading>
          <Text fontSize="16.2px"  >You don't need another chore. Track isn't another tool you dread opening. There's no onboarding required. Track will even remind you to pause or clock out. Because your well-being is just as important as your to-do list.</Text>
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
        <Box m="auto" maxW="30rem" mt="4rem" pb="5rem" >
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

      <Box height="auto" style={{ background: 'linear-gradient(to bottom, #2c1438 65%, #412a4c 35%)' }} >
        <Image m="auto" src="https://public-assets.toggl.com/b/static/illo-megaphone-dark-f172b5380650e29d114fccee5268a0f5.gif" />
      </Box>
      <Box bgColor="#412a4c" pb="5rem">
        <Box m="auto" maxW="40rem" pt="3rem" >
          <Heading textAlign="center" fontSize="35.4px" color="#e57cd8"  >Users love us!</Heading>
          <Text textAlign="center" fontSize="19.2px" color="#ffffff" >And we know you will too</Text>
        </Box>
      </Box>


      <Box bgColor="#412a4c" border="1px solid #412a4c" >

        <Box alignItems='left' bgColor="#ffffff" maxW="60rem" ml="3rem" mr="3rem" >
          <Heading p="2rem" fontSize="25.6px" color="#2C1338" >
            "Toggl Track is wickedly easy to use. Having graphs and Summaries vs. Detailed Time is the most brilliant feature of the platform. It's magical."
          </Heading>
          <Text textAlign="center" color="#e57cd8" >Chris Harvey</Text>
          <Text textAlign="center" color="#e57cd8" >Harvey Esquire</Text>

        </Box>

        <Box maxW="60rem" ml="3rem" mr="3rem" style={{ background: 'linear-gradient(to bottom, #ffffff 50%, #412a4c 50%)' }} >
          <Image m="auto" maxW="3rem" src="https://public-assets.toggl.space/cd2402f7-2f3f-4b30-bd89-5b4edb39f68d/static/634fa2fd1623161327d2299bbeb23ff3/81307/people-chris-harvey.avif" />
        </Box>




        <Box alignItems='end' bgColor="#ffffff" maxW="60rem" ml="3rem" mt="5rem" mr="3rem" >
          <Heading p="2rem" fontSize="25.6px" color="#2C1338" >
            "Started tracking all my hours using Toggl Track and I'm addicted. I think it's going to be life-changing."
          </Heading>
          <Text textAlign="center" color="#e57cd8" >Alexis O'Hanian</Text>
          <Text textAlign="center" color="#e57cd8" >Founder of Reddit</Text>

        </Box>

        <Box maxW="60rem" ml="3rem" mr="3rem"  style={{ background: 'linear-gradient(to bottom, #ffffff 50%, #412a4c 50%)' }} >
          <Image m="auto" maxW="3rem" src="https://public-assets.toggl.space/cd2402f7-2f3f-4b30-bd89-5b4edb39f68d/static/f9bd9b316f0bfcb8c50670120dc28897/81307/people-alexis-ohanian.avif" />
        </Box>


        <Box height="5rem" />

        <Box style={{ background: 'linear-gradient(to bottom, #412a4c 30%, #564260 30%)' }} >
          <Image m="auto" src="https://public-assets.toggl.com/b/static/50743fb0844854055a48bfacbe48040d/f13d4/reviews-badge-desktop.avif" />
        </Box>

      </Box>

      <Box bgColor="#fef3ed" >
        <Heading p="3rem" textAlign="center" color="#412a4c" >
          Toggl Track is better together. Used daily by 70,000+ teams.
        </Heading>
        <Text textAlign="center" color="#412a4c" >
          See how teams in various industries use Toggl Track
        </Text>

        <Box p="3rem">
          <Image m="auto" src="https://public-assets.toggl.com/b/static/fc0bbe5b8036173d6bd125b8fc87d619/9b38c/freelancer-logos-desktop.avif" />
        </Box>
      </Box>
    </Box>
  )
}

export default Freelancer