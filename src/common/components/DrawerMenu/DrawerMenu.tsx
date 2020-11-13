import React from 'react';
import {
    Box,
    Button,
    Divider,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Heading,
    IconButton,
    Image,
    Stack,
    Text,
    useDisclosure,
} from '@chakra-ui/core';
import {LinkCard} from '../LinkCard';
import {Routes} from '../../../routing/routes';
import {useAuth} from '../../../authentication/context/AuthProvider';

export const DrawerMenu: React.FC = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const {isAuthenticated, logout} = useAuth();

    const handleLogout = () => {
        onClose();
        logout();
    };

    return (
        <>
            <Flex as={'nav'} align={'center'} justify={'space-between'} p={2} shadow={'sm'}>
                <Box as={'span'}>
                    <Image src={'logo/logo256.png'} size={'48px'} d={'inline'} />
                    <Text d={'inline'}>LendTree - The Social Lending App</Text>
                </Box>
                {isAuthenticated && (
                    <IconButton variant={'outline'} variantColor={'teal'} aria-label="Open Drawer" icon={'arrow-left'} onClick={onOpen} />
                )}
            </Flex>

            <Drawer isOpen={isOpen} placement={'right'} onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth={'1px'}>WELCOME</DrawerHeader>

                    <DrawerBody>
                        <Stack spacing={2}>
                            <Box mt={2}>
                                <Heading as={'h5'} size={'md'} color={'#cccccc'}>
                                    Borrow
                                </Heading>
                                <Divider mt={0} />
                            </Box>

                            <LinkCard icon={'newAuction'} path={Routes.CREATE_AUCTION}>
                                Create Auction
                            </LinkCard>

                            <LinkCard icon={'myAuctions'} path={Routes.MY_AUCTIONS}>
                                My Auctions
                            </LinkCard>

                            <Box mt={2}>
                                <Heading as={'h5'} size={'md'} color={'#cccccc'}>
                                    Lend
                                </Heading>
                                <Divider mt={0} />
                            </Box>

                            <LinkCard icon={'auctions'} path={Routes.AUCTIONS}>
                                Auctions
                            </LinkCard>
                        </Stack>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button onClick={handleLogout}>Logout</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
};
