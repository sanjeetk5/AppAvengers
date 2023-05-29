import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  Icon,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

export default function SingleNote() {
  const [data, setdata] = useState({});
  const { id } = useParams();
  const token = useSelector((store) => {
    return store.LoginReducer.token;
  });
  const getData = () => {
    axios({
      method: "get",
      url: `https://appavengersbe.onrender.com/blog/${id}`,
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Center bg="#003049" h="100vh">
        <TableContainer color={"#fff"}>
          <Table variant="simple">
            <TableCaption>Blogs</TableCaption>
            <TableCaption>
              <Link to="/dashboard">
                <Button>All Blogs</Button>
              </Link>
            </TableCaption>
            <Thead>
              <Tr>
                <Th>Note ID</Th>
                <Th>Title</Th>
                <Th>blog</Th>
                <Th>Edit</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>{data._id}</Td>
                <Td>{data.title}</Td>
                <Td>{data.blog}</Td>
                <Td>
                  {" "}
                  <Center>
                    {" "}
                    <Icon color={"#fff"} fontSize={"20px"}>
                      <EditIcon />
                    </Icon>
                  </Center>
                </Td>
                <Td>
                  {" "}
                  <Center>
                    <Icon color={"#fff"} fontSize={"20px"}>
                      <DeleteIcon />
                    </Icon>
                  </Center>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        ;
      </Center>
    </>
  );
}