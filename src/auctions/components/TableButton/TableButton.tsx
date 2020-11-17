import * as React from 'react';
import {Button, Flex} from '@chakra-ui/react';

interface Props {
    text: string;
    onClick: () => void;
}

export const TableButton: React.FC<Props> = ({text, onClick}) => {
    return (
        <Flex justifyContent={'center'} width={'100%'}>
            <Button colorScheme="green" onClick={onClick}>
                {text}
            </Button>
        </Flex>
    );
};
