import React from 'react';
import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Icon,
    Input,
    Stack,
    Text,
    useDisclosure,
} from '@chakra-ui/core';
import {Card} from '../Card';
import {LinkCard} from '../LinkCard';
import {Routes} from '../../../routing/routes';

export const DrawerMenu: React.FC = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    return (
        <>
            <Button variantColor={'teal'} onClick={onOpen}>
                Open Drawer
            </Button>
            <Drawer isOpen={isOpen} placement={'right'} onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Create your account</DrawerHeader>

                    <DrawerBody>
                        <Stack spacing={2}>
                            <LinkCard icon={'auctions'} path={'/secret'}>
                                SECRET
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
