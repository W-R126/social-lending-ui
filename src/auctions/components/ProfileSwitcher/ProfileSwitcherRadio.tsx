import React from 'react';
import {Button} from '@chakra-ui/core';

export const ProfileSwitcherRadio = React.forwardRef((props: any, ref) => {
    const {isChecked, isDisabled, value, ...rest} = props;
    return (
        <Button
            ref={ref}
            variantColor={isChecked ? 'red' : 'gray'}
            aria-checked={isChecked}
            role="radio"
            isDisabled={isDisabled}
            {...rest}
        />
    );
});
