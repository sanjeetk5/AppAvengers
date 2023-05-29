import { DeleteIcon, EditIcon, ViewIcon } from "@chakra-ui/icons";
import { Button, Center, Icon, Td, Tr, useToast } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function NoteList({ _id, title, blog, ind, handleDelete }) {
  const toast = useToast();
  return (
    <Tr cursor={"pointer"}>
      <Td>{ind}</Td>
      <Td>{title}</Td>
      <Td>{blog}</Td>
      <Td>
        <Center>
          <Link to={`/dashboard/${_id}`}>
            {" "}
            <Icon color={"#fff"} fontSize={"20px"}>
              <ViewIcon />
            </Icon>
          </Link>
        </Center>
      </Td>
      <Td>
        <Center>
          {" "}
          <Link to={`/dashboard/edit/${_id}`}>
            <Icon color={"#fff"} fontSize={"20px"}>
              <EditIcon />
            </Icon>
          </Link>
        </Center>
      </Td>

      <Td>
        <Center>
          <Icon
            color={"#fff"}
            fontSize={"20px"}
            onClick={() => {
              handleDelete(_id);
              toast({
                title: `Note has been deleted `,
                status: "error",
                isClosable: true,
              });
            }}>
            <DeleteIcon />
          </Icon>
        </Center>
      </Td>
    </Tr>
  );
}