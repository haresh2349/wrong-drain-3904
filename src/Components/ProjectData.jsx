import React from "react";
import { useEffect } from "react";

import {
  Thead,
  Tbody,
 
  Tr,
  Th,
  Td,
 
  TableContainer,
} from "@chakra-ui/react";
import { Table, Box } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import { FaRegEdit } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";

import {
  deleteProject,
  editProject,
  getProject,
} from "../Redux/AppReducer/actions";
import { useState } from "react";

const ProjectData = () => {
  const [form, setForm] = useState({
    title: "",
    clientName: "",
  });

  const dispatch = useDispatch();

  const {tasks,isLoading} = useSelector((store) => store.appReducer);

  //   console.log(tasks);


  const { isOpen, onOpen, onClose } = useDisclosure();

  // const [currenData, setCurrentData] = useState({});

  useEffect(() => {
    if (tasks.length === 0) {
      dispatch(getProject());
    }
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteProject(id)).then((r) => {
      dispatch(getProject());
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e, id) => {
    e.preventDefault();

    console.log("hello");

    const payload = { title: form.title, clientName: form.clientName };
    console.log(payload);

    dispatch(
      editProject(id, payload));
  };

  return (
    <TableContainer position="relative" bg="white">
      <Table variant="simple">
       
        <Thead>
          <Tr>
            <Th>PROJECT</Th>
            <Th>ClIENT</Th>
            <Th> Time Status</Th>
            <Th>
              {/* private */}
              Visibility
            </Th>
            <Th>Edit</Th>
            <Th>Delete</Th>
          </Tr>
        </Thead>
        <Tbody>
         {isLoading && <div>Loading...</div>}

          {  tasks.length > 0 && 
            tasks.map((item) => (
              <Tr key={item.id}>
                <Td>{item.title}</Td>
                <Td>{item.clientName}</Td>
                <Td>0 h</Td>
                <Td>{item.visible ? "Public" : "Private"}</Td>
                <Td>
                  <FaRegEdit onClick={onOpen} />

                  <Modal isOpen={isOpen} onClose={onClose} size="sm" fontSize="12px" >
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Edit</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        <form onSubmit={(e) => handleSubmit(e, item.id)}>
                          <Box>
                            <h3>Name</h3>
                            <Input 
                            mt="10px"
                              placeholder="Enter Name"
                              name="title"
                              value={form.title}
                              onChange={handleChange}
                            />
                          </Box>
                          <Box>
                            <h3 style={{marginTop:"10px"}}>CLIENT</h3>
                            <Input
                            mt="10px"
                              placeholder="Enter Client"
                              name="clientName"
                              value={form.clientName}
                              onChange={handleChange}
                            />
                          </Box>

                          <Input mt={"10px"} mb="20px" bg="#d779c6" type="submit" value="Edit" />
                        </form>
                      </ModalBody>
                    </ModalContent>
                  </Modal>
                </Td>
                <Td>
                  <DeleteIcon
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                  />
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ProjectData;
