import React from "react";
import { chakra, Box, Stack, Image, Flex, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <Flex
      direction={{ base: "column", md: "column" , lg:"row" }}
      _light={{ bg:"gray" }}
      px={8}
      py={24}
      mx="auto"
    >
      <Box
        w={{ base: "full", md: "full", xl: "full" }}
        mx="auto"
        pr={{ md: 20 }}
      >
        <chakra.h2
          fontSize={{ base: "3xl" , sm: "4xl" }}
          fontWeight="bold"
          lineHeight="shorter"
          color="red"
          _dark={{ color: "gray.100" }}
          mb={6}
          textAlign={"left"}
        >
          <chakra.span  display="block">Ready to dive in?</chakra.span>
          <chakra.span
            display="block"
            color="white"
            _dark={{ color: "gray.500" }}
          >
            Start Creating Your Personal Blogs From Today Onwards.
          </chakra.span>
        </chakra.h2>
        <chakra.p
          mb={6}
          fontSize={{ base: "lg", md: "sm" }}
          color="gray.100"
          _dark={{ color: "gray.300" }}
          textAlign={"left"}
        >
         AppAvengers Blog site is where you can create your personal blogs for free.
         Just one click of Signup and you are ready to go.
         You can edit , delete or create your website from anywhere or from any device.
         Feel free to use our Website.
        </chakra.p>
        <Stack
          direction={{ base: "column", sm: "row" }}
          mb={{ base: 4, md: 8 }}
          spacing={2}
        >
          <Box  rounded="md" shadow="md">
            <Link to={"/signup"} >
            <Button
            textAlign={"center"}
              px={5}
              py={5}
              border="solid transparent"
              fontWeight="bold"
              w="full"
              rounded="md"
              _light={{ color: "white" }}
              bg="red"
              _dark={{ bg: "brand.500" }}
              _hover={{
                bg: "brand.700",
                _dark: { bg: "brand.600" },
                cursor:"pointer",
                m:"auto"
              }}
            >
              Sign up for free
            </Button>
            </Link>
            
          </Box>
        </Stack>
      </Box>
      <Box w={{ base: "full", md: "full" }} mx="auto" textAlign="center">
        <Image
          w="full"
          rounded="lg"
          shadow="2xl"
          src="https://www.sketchappsources.com/resources/source-image/blog-template-ochenkowski.png"
          alt="Hellonext feedback boards software screenshot"
        />
      </Box>
    </Flex>
  );
};

export default Homepage;