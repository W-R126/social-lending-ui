import * as React from 'react';
import {Offer} from '../../api/offersAPI.types';
import {Box, HStack} from '@chakra-ui/react';
import {format} from 'date-fns';
import {DATE_FORMAT} from '../../../common/constants';

interface Props {
    offers: Offer[];
}

export const OfferInfo: React.FC<Props> = ({offers}) => {
    return (
        <>
            {offers?.map((offer: Offer) => (
                <HStack>
                    <Box>{format(new Date(offer.date), DATE_FORMAT)}</Box>
                </HStack>
            ))}
        </>
    );
};
