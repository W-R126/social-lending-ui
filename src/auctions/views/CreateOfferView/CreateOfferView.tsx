import * as React from 'react';
import {useState} from 'react';
import {useLenderOffers} from '../../hooks/useLenderOffers';
import {useHistory} from 'react-router-dom';
import {OfferDTO} from '../../api/offersAPI.types';
import {Formik, FormikHelpers} from 'formik';
import {Routes} from '../../../routing/routes';
import {Card} from '../../../common/components/Card';
import {Alert, AlertIcon, Button, Flex, FormControl, Heading, useDisclosure} from '@chakra-ui/react';
import {dialogText, initialFormValues} from './CreateOfferView.constants';
import {validate} from './CreateOfferView.helpers';
import {useParams} from 'react-router';
import {RangeInput} from '../../components/RangeInput';
import {AreYouSureAlert} from '../../../common/components/AreYouSureAlert';

/**
 * Shows form which allows lender to submit his
 * offer to certain auction with desired parameters
 * @constructor
 */
const CreateOfferView: React.FC = () => {
    const [error, setError] = useState<string | null>(null);
    const {createOffer} = useLenderOffers();
    const history = useHistory();
    const {auctionId} = useParams();
    const {isOpen, onOpen, onClose} = useDisclosure();

    const handleSubmit = (values: OfferDTO, {setSubmitting}: FormikHelpers<OfferDTO>) => {
        createOffer({
            auctionId: auctionId,
            proposedAnnualPercentageRate: values.proposedAnnualPercentageRate / 100,
        } as OfferDTO).then(success => {
            if (success) {
                history.push(Routes.MY_OFFERS);
            } else {
                setError('Error while submitting offer');
                setSubmitting(false);
            }
        });
    };

    return (
        <Flex justify={'center'}>
            <Card m={4} width={'full'} maxWidth={'800px'}>
                <Heading>Create New Offer</Heading>
                <Formik initialValues={initialFormValues} validate={validate} onSubmit={handleSubmit}>
                    {props => {
                        const {values, touched, errors, isSubmitting, isValid, handleSubmit, setFieldValue} = props;

                        return (
                            <form onSubmit={handleSubmit}>
                                <FormControl isInvalid={!!(errors.proposedAnnualPercentageRate && touched.proposedAnnualPercentageRate)}>
                                    <RangeInput
                                        title="Proposed annual percentage rate"
                                        name={'proposedAnnualPercentageRate'}
                                        value={values.proposedAnnualPercentageRate}
                                        onChange={setFieldValue}
                                    />
                                </FormControl>
                                <Button
                                    width={'full'}
                                    mt={4}
                                    isDisabled={isSubmitting || !isValid}
                                    isLoading={isSubmitting}
                                    onClick={onOpen}
                                >
                                    Create Offer
                                </Button>
                                {error !== null && (
                                    <Alert mt={3} status={'error'}>
                                        <AlertIcon />
                                        {error}
                                    </Alert>
                                )}
                                <AreYouSureAlert
                                    dialogText={dialogText(values.proposedAnnualPercentageRate)}
                                    title={'Create offer'}
                                    onClose={onClose}
                                    isOpen={isOpen}
                                    onConsent={handleSubmit}
                                />
                            </form>
                        );
                    }}
                </Formik>
            </Card>
        </Flex>
    );
};

export default CreateOfferView;
