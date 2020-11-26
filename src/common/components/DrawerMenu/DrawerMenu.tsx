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
    useColorMode,
} from '@chakra-ui/react';
import {LinkCard} from '../LinkCard';
import {Routes} from '../../../routing/routes';
import {useAuth} from '../../../authentication/context/AuthProvider';
import {Menu, Moon, Sun} from 'react-feather';
import {NewAuctionIcon, AuctionsIcon, MyAuctionsIcon, MyOffersIcon, HistoryIcon, UserIcon, MyLoansIcon} from './DrawerMenu.icons';
import {Balance} from '../../../userProfile/components/Balance/Balance';
import {UserProvider} from '../../../userProfile/contexts/UserProvider';

export const DrawerMenu: React.FC = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const {isAuthenticated, logout} = useAuth();
    const {colorMode, toggleColorMode} = useColorMode();

    const handleLogout = async () => {
        onClose();
        await logout();
    };

    return (
        <>
            <Flex as={'nav'} align={'center'} justify={'space-between'} p={2} shadow={'sm'}>
                <Box as={'span'}>
                    <Image src={'logo/logo256.png'} boxSize={'48px'} d={'inline'} />
                    <Text d={'inline'}>LendTree - The Social Lending App</Text>
                </Box>
                <Stack direction={'row'}>
                    <IconButton
                        variant={'outline'}
                        colorScheme={'teal'}
                        aria-label={`Toggle ${colorMode} mode`}
                        icon={colorMode === 'dark' ? <Sun /> : <Moon />}
                        onClick={toggleColorMode}
                    />
                    {isAuthenticated && (
                        <IconButton variant={'outline'} colorScheme={'teal'} aria-label="Open Drawer" icon={<Menu />} onClick={onOpen} />
                    )}
                </Stack>
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
                                    My Account
                                </Heading>
                                <Divider mt={0} />
                            </Box>

                            <Box>
                                <UserProvider>
                                    <Balance />
                                </UserProvider>
                            </Box>

                            <LinkCard icon={<UserIcon boxSize={'48px'} />} path={Routes.ACCOUNT}>
                                View Account
                            </LinkCard>

                            <LinkCard icon={<HistoryIcon boxSize={'48px'} />} path={Routes.HISTORY}>
                                History
                            </LinkCard>

                            <Box mt={2}>
                                <Heading as={'h5'} size={'md'} color={'#cccccc'}>
                                    Borrow
                                </Heading>
                                <Divider mt={0} />
                            </Box>

                            <LinkCard icon={<NewAuctionIcon boxSize={'48px'} />} path={Routes.CREATE_AUCTION}>
                                Create Auction
                            </LinkCard>

                            <LinkCard icon={<MyAuctionsIcon boxSize={'48px'} />} path={Routes.MY_AUCTIONS}>
                                My Auctions
                            </LinkCard>

                            <LinkCard icon={<MyLoansIcon boxSize={'48px'} />} path={Routes.BORROWER_LOANS}>
                                My Loans
                            </LinkCard>

                            <Box mt={2}>
                                <Heading as={'h5'} size={'md'} color={'#cccccc'}>
                                    Lend
                                </Heading>
                                <Divider mt={0} />
                            </Box>

                            <LinkCard icon={<AuctionsIcon boxSize={'48px'} />} path={Routes.AUCTIONS}>
                                Auctions
                            </LinkCard>

                            <LinkCard icon={<MyOffersIcon boxSize={'48px'} />} path={Routes.MY_OFFERS}>
                                My Offers
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
