'use client'

import {
    Flex, 
    Box, 
    FormControl,
    FormLabel,
    Input, 
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    Select
} from '@chakra-ui/react'

import {useState} from 'react'
import {ViewIcon, ViewOffIcon} from '@chakra-ui/icons'


export default function SignupCard(){
    const [showPassword, setShowPassword] = useState(false)

    return (
        <Flex minH={'100vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} textAlign={'center'}>
                        Sign up
                    </Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cpp; features
                    </Text>
                </Stack>
                <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
                    <Stack spacing={4}>
                        <HStack>
                            <Box>
                                <FormControl id='firstName' isRequired>
                                    <FormLabel>First Name</FormLabel>
                                    <Input type="text" />
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl id='lastName'>
                                    <FormLabel>Last Name</FormLabel>
                                    <Input type="text" />
                                </FormControl>
                            </Box>
                        </HStack>
                        <FormControl id='email' isRequired>
                            <FormLabel>Email Address</FormLabel>
                            <Input type="email" />
                        </FormControl>
                        <FormControl id='password' isRequired>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input type={showPassword ? 'text' : 'password'} />
                                <InputRightElement h={'full'}>
                                    <Button variant={'ghost'} onClick={() => setShowPassword((showPassword) => !showPassword)}>
                                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Stack spacing={10} pt={2}>
                            <Select placeholder='Select option that most closely represents yourself' variant={'filled'} icon={<MdArrowDropDown />}>
                                <option value='artist'>Artist who wants to sell commissions</option>
                                <option value='buyer'>Client who is interested in buying commissions</option>
                            </Select>
                        </Stack>
                        <Stack spacing={10} pt={2}>
                            <Button loadingText="Submitting" size="lg" bg={'blue.400'} color={'white'} hover={{bg: 'blue.500',}}>
                                Sign Up
                            </Button>
                        </Stack>
                        <Stack pt={6}>
                            <Text align={'center'}>
                                Already a user? <Link color={'blue.400'}>Login</Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    )
}