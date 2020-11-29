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
    cancelRef?: React.RefObject<HTMLButtonElement>;
    onConsent: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
    dialogText: string;
    title: string;
    isLoading?: boolean;
}
/**
 * Component to be used wherever user confirmation is needed. Will either cancel action with cancelRef
 * or continue by calling on onConsent. Does not store states, depends on props
 * @param title
 * @param dialogText
 * @param isOpen
 * @param onClose
 * @param cancelRef
 * @param onConsent
 * @constructor
 */
export const AreYouSureAlert: React.FC<Props> = ({title, dialogText, isOpen, onClose, isLoading, cancelRef, onConsent}) => {

    return (
        <>
            <AlertDialog motionPreset="slideInBottom" leastDestructiveRef={cancelRef} onClose={onClose} isOpen={isOpen} isCentered>
                <AlertDialogOverlay />

                <AlertDialogContent>
                    <AlertDialogHeader>{title}</AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody>{dialogText}</AlertDialogBody>
                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                            No
                        </Button>
                        <Button isLoading={isLoading} type="submit" colorScheme="green" ml={3} onClick={() => onConsent()}>
                            Yes
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
};
