import {useRouter} from 'next/router';
import {useSelector} from 'react-redux';
import Layout from '@/layouts/Layout';
import {useEffect, useState} from "react";
import {Button, Table, Thead, Tbody,Text,Lorem, Tr, Th, Td, TableContainer, Card, CardHeader, CardBody, Heading, Stack, StackDivider, Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider,} from '@chakra-ui/react'
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons'
import {  Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton} from '@chakra-ui/react'
import {useDisclosure} from "@chakra-ui/react";

const UsersList = () => {
    const router = useRouter();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const loading = useSelector(state => state.auth.loading);
    const [users, setUsers] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure()

    if (typeof window !== 'undefined' && !loading && !isAuthenticated)
        router.push('/auth/login-new');

    function UserDetailsModal({user}) {
        const [isOpen, setIsOpen] = useState(false);
        const onClose = () => setIsOpen(false);

        return (
            <>
                <Button onClick={() => setIsOpen(true)}>View Details</Button>
                <Modal isOpen={isOpen} onClose={onClose} size='2xl'>
                    <ModalOverlay/>
                    <ModalContent>
                        <ModalHeader>User Details</ModalHeader>
                        <ModalBody>
                            <p>Name: {user.first_name}</p>
                            <p>Email: {user.email}</p>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={onClose}>Close</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </>
        );
    }


    useEffect(() => {
        fetch('/api/account/users')
            .then((res) => res.json())
            .then((data) => {
                setUsers(data.users);
            });
    }, []);

    return (
        <Layout
            title='httpOnly Auth | Dashboard'
            content='Dashboard page for httpOnly tutorial app'
            sidebarName="AdminSideBar"
        >
            <div className='p-5 bg-light rounded-3'>
                <div className='container-fluid py-3'>
                    <Card>
                        <CardHeader>
                            <Heading size='md'>Users</Heading>
                        </CardHeader>

                        <Stack divider={<StackDivider />} spacing='4' />

                        <CardBody>
                            <TableContainer>
                                <Table
                                    variant="simple"
                                    size="md"
                                >
                                    <Thead>
                                        <Tr>
                                            <Th>First Name</Th>
                                            <Th>Last Name</Th>
                                            <Th>Email</Th>
                                            <Th>Actions</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {users.map((user) => (
                                            <Tr key={user.id}>
                                                <Td>{user.first_name}</Td>
                                                <Td>{user.last_name}</Td>
                                                <Td>{user.email}</Td>
                                                <Td>
                                                    <Menu>
                                                        {({isOpen}) => (
                                                            <>
                                                                <MenuButton isActive={isOpen} rightIcon={<ChevronDownIcon/>}>
                                                                    <HamburgerIcon color="blue.400"/>
                                                                </MenuButton>
                                                                <MenuList>
                                                                    <MenuItem>
                                                                        <UserDetailsModal user={user} />
                                                                    </MenuItem>
                                                                    <MenuItem>Edit</MenuItem>
                                                                    <MenuItem>Block</MenuItem>
                                                                    <MenuItem>Recover Credentials</MenuItem>
                                                                    <MenuItem>Permissions</MenuItem>
                                                                    <MenuItem>Roles</MenuItem>
                                                                </MenuList>
                                                            </>
                                                        )}
                                                    </Menu>
                                                </Td>
                                            </Tr>
                                        ))}
                                    </Tbody>
                                </Table>
                            </TableContainer>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </Layout>
    );
};

export default UsersList;