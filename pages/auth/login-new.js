import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useRouter} from 'next/router';
import {login, reset_register_success} from "@/actions/auth";
import Layout from "@/layouts/Layout";
import Loader from 'react-loader-spinner';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue
} from '@chakra-ui/react';

export default function LoginPage() {
    const dispatch = useDispatch();
    const router = useRouter();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const loading = useSelector(state => state.auth.loading);

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const {username, password} = formData;

    useEffect(() => {
        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(reset_register_success());
    }, [dispatch]);

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();

        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(login(username, password));
    };

    if (typeof window !== 'undefined' && isAuthenticated)
        router.push('/admin/dashboard');

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <form onSubmit={onSubmit}>
                            <FormControl>
                                <FormLabel>Email address</FormLabel>
                                <Input type="text" onChange={onChange} name='username'/>
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel>Password</FormLabel>
                                <Input type="password" onChange={onChange} name='password'/>
                            </FormControl>
                            <Stack spacing={10}>
                                <Stack
                                    direction={{base: 'column', sm: 'row'}}
                                    align={'start'}
                                    justify={'space-between'}>
                                    <Checkbox>Remember me</Checkbox>
                                    <Link color={'blue.400'}>Forgot password?</Link>
                                </Stack>
                                <Button
                                    bg={'blue.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'blue.500',
                                    }}
                                    type={'submit'}
                                >
                                    Sign in
                                </Button>
                            </Stack>
                        </form>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
};
