import React from "react";

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  Avatar,
  Text,
} from "@chakra-ui/react";

import { AiOutlineMenu, AiFillHome, AiOutlineInbox } from "react-icons/ai";

import { HiAnnotation } from "react-icons/hi";
import { Link } from "react-router-dom";

const LoginNavbar = () => {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
        position={"sticky"}
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <HStack display="flex" spacing={3} alignItems="center">
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{ color: "inherit" }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  justifySelf="self-start"
                  onClick={mobileNav.onClose}
                />
                <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
                  Homepage
                </Button>

                <Button
                  w="full"
                  variant="ghost"
                  colorScheme="black"
                  leftIcon={<HiAnnotation />}
                >
                  Blog Collections
                </Button>
              </VStack>
            </Box>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              <Link to={"/"}>
                <Text>AppAvengers</Text>
              </Link>
            </chakra.a>

            <HStack spacing={3} display={{ base: "none", md: "inline-flex" }}>
              <Link to={"/"}>
                <Button variant="ghost" leftIcon={<AiFillHome />} size="sm">
                  HomePage
                </Button>
              </Link>

              <Link to={"/dashboard"}>
                <Button variant="ghost" leftIcon={<HiAnnotation />} size="sm">
                  BlogCollections
                </Button>
              </Link>
            </HStack>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};
export default LoginNavbar;
