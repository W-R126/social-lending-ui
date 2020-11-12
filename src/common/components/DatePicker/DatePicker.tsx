import React, {HTMLAttributes} from 'react';
import ReactDatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.css';

interface Props {
    isClearable?: boolean;
    onChange: (date: Date) => any;
    selectedDate: Date | undefined;
    showPopperArrow?: boolean;
}

export const DatePicker = ({
    selectedDate,
    onChange,
    isClearable = false,
    showPopperArrow = false,
    ...props
}: Props & HTMLAttributes<HTMLElement>) => {
    return (
        // @ts-ignore
        <ReactDatePicker
            selected={selectedDate}
            onChange={onChange}
            isClearable={isClearable}
            showPopperArrow={showPopperArrow}
            {...props}
        />
    );
};
