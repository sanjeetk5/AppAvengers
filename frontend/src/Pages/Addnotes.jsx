import {
    Box,
    Button,
    Divider,
    FormControl,
    FormLabel,
    GridItem,
    Heading,
    Input,
    InputGroup,
    InputLeftAddon,
    SimpleGrid,
    Stack,
    Text,
    Textarea,
    chakra,
    getToken,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
 
import LoginNavbar from "../Components/LoginNavbar";
import { AddNotes } from "../Redux/NotesReducer/action";
  
  const Addnotes = () => {
    const [inputValue, setInputValue] = useState({title:"" , blog:""});
    
    const dispatch = useDispatch();
    const token = useSelector((store)=>{
           return store.LoginReducer.token
    })
  
    
    const handleSubmit = (e) => {
     
      e.preventDefault()
      let debounce;

      clearTimeout(debounce)
      debounce = setTimeout(()=>{
        dispatch(AddNotes(inputValue , token))
        // console.log(inputValue , token)
        setInputValue({title:"" , blog:""});
      },1000)
      
     
    };
  
    return (
      <>
      <LoginNavbar/>
       <Box
        bg="black"
        _dark={{
          bg: "#111",
        }}
        p={10}
      >
        <Box>
          <SimpleGrid
            display={{
              base: "initial",
              md: "grid",
            }}
            columns={{
              md: 3,
            }}
            spacing={{
              md: 6,
            }}
          >
            <GridItem
              colSpan={{
                md: 1,
              }}
            >
              <Box px={[4, 0]}>
                <Heading
                  fontSize="lg"
                  fontWeight="md"
                  lineHeight="6"
                  color="#F1F6F9"
                >
                  Profile
                </Heading>
                <Text
                  mt={1}
                  fontSize="sm"
                  color="gray.600"
                  _dark={{
                    color: "gray.400",
                  }}
                >
                  This information will be displayed publicly so be careful what
                  you share.
                </Text>
              </Box>
            </GridItem>
            <GridItem
              mt={[5, null, 0]}
              colSpan={{
                md: 2,
              }}
            >
              <chakra.form
                shadow="base"
                rounded={[null, "md"]}
                overflow={{
                  sm: "hidden",
                }}
                onSubmit={handleSubmit}
              >
                <Stack
                  px={4}
                  py={5}
                  bg="white"
                  _dark={{
                    bg: "#141517",
                  }}
                  spacing={6}
                  p={{
                    sm: 6,
                  }}
                >
                  <SimpleGrid columns={3} spacing={6}>
                    <FormControl as={GridItem} colSpan={[3, 2]}>
                      <FormLabel
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                          color: "gray.50",
                        }}
                      >
                        Title Of Your Blog
                      </FormLabel>
                      <InputGroup size="sm">
                        <InputLeftAddon
                          bg="gray.50"
                          _dark={{
                            bg: "gray.800",
                          }}
                          color="gray.500"
                          rounded="md"
                        >
                          Title
                        </InputLeftAddon>
                        <Input
                          type="tel"
                          value={inputValue.title}
                          placeholder="Create Your blog title"
                          focusBorderColor="brand.400"
                          rounded="md"
                          onChange={(e)=>setInputValue({...inputValue , title:e.target.value})}
                        />
                      </InputGroup>
                    </FormControl>
                  </SimpleGrid>
  
                  <FormControl id="email" mt={1}>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                    >
                      Blog
                    </FormLabel>
                    <InputGroup size="sm">
                      <InputLeftAddon
                        bg="gray.50"
                        _dark={{
                          bg: "gray.800",
                        }}
                        color="gray.500"
                        rounded="md"
                      >
                        Add Your Blog 
                      </InputLeftAddon>
                    </InputGroup>
  
                    <Textarea
                    value={inputValue.blog}
                      placeholder="Add Your Blog"
                      mt={1}
                      rows={3}
                      shadow="sm"
                      focusBorderColor="brand.400"
                      fontSize={{
                        sm: "sm",
                      }}
                      onChange={(e)=>setInputValue({...inputValue , blog :e.target.value})}
                    />
                  </FormControl>
                </Stack>
                <Box
                  px={{
                    base: 4,
                    sm: 6,
                  }}
                  py={3}
                  bg="gray.50"
                  _dark={{
                    bg: "#121212",
                  }}
                  textAlign="right"
                >
                  <Button
                    type="submit"
                    _focus={{
                      shadow: "",
                    }}
                    fontWeight="md"
                  >
                    Save
                  </Button>
                </Box>
              </chakra.form>
            </GridItem>
          </SimpleGrid>
        </Box>
  
        <Divider
          my="5"
          borderColor="gray.300"
          _dark={{
            borderColor: "whiteAlpha.300",
          }}
          visibility={{
            base: "hidden",
            sm: "visible",
          }}
        />
      </Box>
      </>
     
    );
  };
  
  export default Addnotes;