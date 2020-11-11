import React from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    IconButton,
    Stack,
    Text,
    useDisclosure,
} from '@chakra-ui/core';
import {LinkCard} from '../LinkCard';
import {Routes} from '../../../routing/routes';
import {useAuth} from '../../../authentication/context/AuthProvider';

export const DrawerMenu: React.FC = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const {isAuthenticated} = useAuth();
    return (
        <>
            <Flex as={'nav'} align={'center'} justify={'space-between'} p={3}>
                <Text>Otter - The Social Lending App</Text>
                {isAuthenticated && (
                    <IconButton variant={'outline'} variantColor={'teal'} aria-label="Open Drawer" icon={'arrow-left'} onClick={onOpen} />
                )}
            </Flex>
            <Drawer isOpen={isOpen} placement={'right'} onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth={'1px'}>USER INFO HERE</DrawerHeader>

                    <DrawerBody>
                        <Stack spacing={2}>
                            <LinkCard icon={'auctions'} path={Routes.AUCTIONS}>
                                Auctions
                            </LinkCard>
                        </Stack>
                    </DrawerBody>

                    <DrawerFooter>
                        <Text>Hello</Text>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
};
