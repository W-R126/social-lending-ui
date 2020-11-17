import * as React from 'react';
import {Flex, Heading} from '@chakra-ui/react';
import {Card} from '../../../common/components/Card';
import {Formik} from 'formik';
import {initialFormValues} from './TransferView.constants';

export const TransferView: React.FC = () => {
    return (
        <Flex justify={'center'}>
            <Card m={4} width={'full'} maxWidth={'800px'}>
                <Heading> Transfer </Heading>
                <Formik initialValues={initialFormValues} validate={} onSubmit={}></Formik>
            </Card>
        </Flex>
    );
};
