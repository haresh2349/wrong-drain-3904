import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Image,
  Input,
  Select,
  Table,
  Text,
  useDisclosure
} from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";

import { getProject } from "../Redux/AppReducer/actions";

import React from "react";
import { useEffect } from "react";
import { FaTasks, FaUser } from "react-icons/fa";
import EmptyProject from "./EmptyProject";
import ProjectData from "./ProjectData";

import SideBar from "./SideBar";


const Projects = () => {
  const dispatch=useDispatch()

  const tasks=useSelector((store)=>store.appReducer.tasks)
  console.log(tasks)
  
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  useEffect(()=>{
    if(tasks.length===0){
      dispatch(getProject())
    }
  },[tasks.length])


  return (


    <Box display={"flex"}>
<SideBar color="white"/>

    <Box w="87%" position="relative" height="100vh" left="13%" bg="white">
      <Flex justifyContent="space-between" p="15px">
        <Heading size="md">Projects</Heading>
        <Button bg="#DD6FD1" color="#FFFF" fontSize="17px">
          + New Project
        </Button>
      </Flex>
      <Flex
        gridGap="20px"
        color="#7E6E85"
        bg="#FFFF"
        p="3px 20px"
        boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
      >
        <Select placeholder="Show active" w="150px" border="2px solid #7E6E85">
          <option variant="filled" value="option1" bg="#F5F3F5">
            Option 1
          </option>
          <option variant="filled" value="option2" bg="#F5F3F5">
            Option 2
          </option>
          <option variant="filled" value="option3" bg="#F5F3F5">
            Option 3
          </option>
        </Select>
        <Flex gridGap="10px" alignItems="center">
          <Text>Filter by:</Text>
          <Flex gridGap="10px" alignItems="center">
            <Box bg="#95899B" p="2px" borderRadius="6px">
              <FaUser color="#FFFF" />
            </Box>
            <Text>Client</Text>
          </Flex>
          <Flex gridGap="10px" alignItems="center">
            <Box>
              <svg
                className="css-18eihd5-spacingRight"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <g fill="none">
                  <rect width="18" height="18" rx="4" fill="#95899B"></rect>
                  <path
                    d="M11.1 10.2C11.5 11.2 11.9 11.9 11.9 13 11.9 14.6 11 15 11 15L13.5 15C14.3 15 15 14.3 15 13.5 15 13.5 15 13.8 15 13.1 15 11.1 13 10.8 13 10.1 13 8.9 14.2 9.2 14.2 7.3 14.2 6.1 13.4 4.9 12 4.9 10.5 4.9 9.8 6.1 9.8 7.3 9.8 8.9 10.6 9.2 11.1 10.2ZM5.3 8.8C5.3 10.7 3 10 3 13.1 3 13.8 3 13.1 3 13.1 3 14.1 3.9 15 5 15L8.5 15C9.6 15 10.5 14.1 10.5 13.1 10.5 13.1 10.5 13.8 10.5 13.1 10.5 10 8.2 10.7 8.2 8.8 8.2 8 9.3 8 9.3 5.7 9.3 4.5 8.6 3 6.8 3 4.9 3 4.2 4.5 4.2 5.7 4.2 8 5.3 8 5.3 8.8Z"
                    fill="#FFFFFF"
                  ></path>
                </g>
              </svg>
            </Box>
            <Text>Team</Text>
          </Flex>
          <Flex gridGap="10px" alignItems="center">
            <Box>
              <svg
                className="css-9332z-BillableIcon-spacingRight e1q5ulgx0"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <g>
                  <rect width="18" height="18" rx="4" fill="#95899B"></rect>
                  <path d="M11.6 6.2C11.6 6.2 10.8 5 9 5 7.7 5 6.2 5.7 6.2 7 6.2 9.7 11.8 8.3 11.8 11 11.8 12.1 10.7 13 9 13 7.1 13 6.2 11.6 6.2 11.6"></path>
                  <path d="M9 3.5L9 5"></path>
                  <path d="M9 13L9 14.5"></path>
                </g>
              </svg>
            </Box>
            <Text>Billable</Text>
          </Flex>
          <Flex gridGap="10px" alignItems="center">
            <Box>
              <svg
                className="css-zulhbj-EnhancedDescriptionIcon-spacingRight e1a87xe20"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <g fill="none" fill-rule="evenodd">
                  <rect width="18" height="18" fill="#95899B" rx="4"></rect>
                  <path
                    fill="#FFFFFF"
                    d="M7.524 13l-.348-1.548H5.268L4.92 13H3l2.064-8.496h2.412L9.528 13H7.524zM6.252 6.352h-.048l-.72 3.612h1.452l-.684-3.612zM13.376 10.264h-.336c-.136 0-.268.012-.396.036a.841.841 0 0 0-.336.138.73.73 0 0 0-.228.264.897.897 0 0 0-.084.414c0 .248.054.43.162.546a.514.514 0 0 0 .39.174c.144 0 .27-.036.378-.108a.795.795 0 0 0 .258-.282 1.45 1.45 0 0 0 .144-.396c.032-.148.048-.294.048-.438v-.348zm.06 1.956c-.08.28-.238.506-.474.678-.236.172-.542.258-.918.258-.184 0-.372-.032-.564-.096a1.448 1.448 0 0 1-.528-.318 1.688 1.688 0 0 1-.396-.588c-.104-.244-.156-.546-.156-.906 0-.432.078-.788.234-1.068.156-.28.36-.504.612-.672.252-.168.538-.286.858-.354.32-.068.644-.102.972-.102h.24v-.096c0-.304-.07-.524-.21-.66-.14-.136-.326-.204-.558-.204a1.28 1.28 0 0 0-.63.156c-.188.104-.35.236-.486.396l-.828-1.152c.256-.304.574-.54.954-.708.38-.168.758-.252 1.134-.252.424 0 .784.064 1.08.192.296.128.536.316.72.564.184.248.316.55.396.906.08.356.12.766.12 1.23V13H13.46v-.78h-.024z"
                  ></path>
                </g>
              </svg>
            </Box>
            <Text>Project name</Text>
          </Flex>
        </Flex>
      </Flex>



     <Box>
      {tasks?.length===0 ? <EmptyProject/> : <ProjectData/>}
     </Box>



      {/* <Box
        w="30%"
        m="auto"
        position="absolute"
        top="0"
        bottom="0"
        left="0"
        right="0"
        height="300px"
        bg="lightblue"
        p="15px"
      >
        <Flex justifyContent="space-between" p="10px" alignItems="center">
          <Text>Create a new project</Text>
          <CloseIcon />
        </Flex>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input type="email" placeholder="Project name" />
          <FormLabel>Cleint</FormLabel>
          <Input type="email" placeholder="Cleint name" />

          <Button w="100%" mt="40px" bg="#DD6FD1">
            Create project
          </Button>
        </FormControl>
      </Box> */}
    </Box>
    </Box>
  );
};

export default Projects;
