import {getTomorrow} from '../../../common/helpers/getTomorrow';
import {newTransferData} from './TransferViewTypes';

export const initialFormValues: newTransferData = {
    transferDate: new Date(),
    transferAmount: 300,
    toAccount: 'account number',
};
