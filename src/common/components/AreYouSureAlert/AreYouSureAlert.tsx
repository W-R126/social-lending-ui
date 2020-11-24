import * as React from 'react';
import {
    AlertDialog,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogCloseButton,
    AlertDialogBody,
    AlertDialogFooter,
    Button,
} from '@chakra-ui/react';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    cancelRef: React.RefObject<any> | undefined;
    onConsent: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
    dialogText: string;
}

export const AreYouSureAlert: React.FC<Props> = ({dialogText, isOpen, onClose, cancelRef, onConsent}) => {
    return (
        <>
            <AlertDialog motionPreset="slideInBottom" leastDestructiveRef={cancelRef} onClose={onClose} isOpen={isOpen} isCentered>
                <AlertDialogOverlay />

                <AlertDialogContent>
                    <AlertDialogHeader>Create Offer?</AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody>{dialogText}</AlertDialogBody>
                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                            No
                        </Button>
                        <Button type="submit" colorScheme="green" ml={3} onClick={() => onConsent()}>
                            Yes
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
};
