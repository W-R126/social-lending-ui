import * as React from 'react';
import {Button, Flex} from '@chakra-ui/react';

/**
 * Parameter definition
 */
interface Props {
    /**
     * Text displayed on button
     */
    text: string;
    /**
     * Function revoked on button click
     */
    onClick: () => void;
}

/**
 * Custom button with text and
 * onClick method specified
 * @param text
 * @param onClick
 * @constructor
 */
export const TableButton: React.FC<Props> = ({text, onClick}) => {
    return (
        <Flex justifyContent={'center'} width={'100%'}>
            <Button colorScheme="green" onClick={onClick}>
                {text}
            </Button>
        </Flex>
    );
};
