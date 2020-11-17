import * as React from 'react';
import {Offer} from '../../api/offersAPI.types';
import {Table} from '../Table';
import {TableColumns} from './BrowseOffers.constants';

interface Props {
    offers: Offer[];
}

export const BrowseOffers: React.FC<Props> = ({offers}) => {
    return (
        <>
            <Table data={offers} columns={TableColumns} />
        </>
    );
};
