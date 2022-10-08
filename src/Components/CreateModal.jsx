

import React, { useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Box,
    Input,
    Select,
    Flex,
    Button,
  } from "@chakra-ui/react";
import { ChevronRightIcon } from '@chakra-ui/icons';
import { addProject, getProject } from '../Redux/AppReducer/actions';
import { useDispatch } from 'react-redux';




const CreateModal = () => {


    const dispatch=useDispatch()
    const [form, setForm] = useState({
        title: "",
        clientName: "",
        template: "",
      });

    

      const handleAdd = (e) => {
        e.preventDefault();
    
        const payload = {
          title: form.title,
          clientName: form.clientName,
          template: form.template,
          visible: false,
        };
    
        dispatch(addProject(payload)).then((r) => {
          dispatch(getProject());
          alert("Project Added");
        });
      };

      const handleChange = (e) => {
        const { name, value } = e.target;
    
        setForm({ ...form, [name]: value });
      };
    

    const { isOpen, onOpen, onClose ,onToggle} = useDisclosure()
  return (
<>
<Button bg="#dd6fd1"onClick={onOpen} color="white">Create Project</Button>
    <Modal isOpen={isOpen} onClose={onClose} size="sm" onOpen={onOpen}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Create new project</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <form onSubmit={handleAdd}>
          <Box mt="20px" fontSize="12px">
            <h3>NAME</h3>
            <Input
              mt="10px"
              value={form.title}
              name="title"
              onChange={handleChange}
              placeholder="Project name"
            />
          </Box>

          <Box mt="20px" fontSize="12px">
            <h3>CLIENT</h3>
            <Input
              mt="10px"
              value={form.clientName}
              name="clientName"
              onChange={handleChange}
              placeholder="Client name"
            />
          </Box>

          <Box mt="20px" fontSize="12px">
            <h3>TEMPLATE</h3>
            <Select mt="10px" name="template" onChange={handleChange}>
              <option value="temp1">Temp1</option>
              <option value="temp2">Temp2</option>
            </Select>
          </Box>

    
          <Flex mt="20px" direction={"row"} gap="15px" fontSize="12px">
            <Box>
              <ChevronRightIcon />
            </Box>
            <Box>ESTIMATES AND BILLING OPTIONS</Box>
          </Flex>

          <Input
            fontSize="12px"
            bg="#d164c5"
            color="white"
            _hover={{
              backgroundColor: "#d779c6",
            }}
            mt="20px"
            mb="10px"
            type="submit"
            value="Create project"
          />
        </form>
      </ModalBody>
    </ModalContent>
   </Modal> 
   </>
   
  )
}

export default CreateModal