import { Box, Heading, Input, Stack, useToast } from "@chakra-ui/react";
import axios from "axios";
import { calcLength } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import LoginNavbar from "./LoginNavbar";

export default function EditRoute() {
  const [blog, setblog] = useState({});
  const navigate = useNavigate();
  const toast = useToast();
  const { id } = useParams();
  const token = useSelector((store) => {
    return store.LoginReducer.token;
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setblog({ ...blog, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "patch",
      url: `https://appavengersbe.onrender.com/blog/edit/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data:blog,
    })
      .then((res) => {
        setTimeout(() => {
          navigate("/dashboard");
        }, 1500);
        return toast({
          title: `Data has been updated❤️`,
          status: "success",
          variant: "solid",
          isClosable: true,
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios({
      method: "get",
      url: `https://appavengersbe.onrender.com/blog/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setblog(res.data);
        // console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
    <LoginNavbar/>
    <Box
      bg="#003049"
      h="100vh"
      color={"#fff"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}>
      <Box>
        <Heading py={2}>Edit Your Blogs Here 😎</Heading>
        <form
          onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <Input
              type="text"
              name="title"
              value={blog.title}
              onChange={handleChange}
              placeholder="title"
            />
            <Input
            type="text"
              placeholder="Title"
              name="blog"
              value={blog.blog}
              onChange={handleChange}
            />
            <Input type="submit" />
          </Stack>
        </form>
      </Box>
    </Box>
    </>
    
  );
}