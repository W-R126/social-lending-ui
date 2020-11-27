import * as React from 'react';
import {Heading, Image, Stack} from '@chakra-ui/react';

interface Props {
    text: string;
}

export const EmptyPage: React.FC<Props> = ({text}) => {
    return (
        <Stack mt={8} direction={'column'} justify={'center'} align={'center'}>
            <Image width={['60%', '50%', '40%', '30%']} src={'svg/empty.svg'} />
            <Heading color={'gray.400'}>{text}</Heading>
        </Stack>
    );
};
