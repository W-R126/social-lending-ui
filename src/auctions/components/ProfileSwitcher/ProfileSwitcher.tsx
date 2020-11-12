import {RadioButtonGroup} from '@chakra-ui/core';
import React from 'react';
import {ProfileState} from './ProfileSwitcher.types';
import {ProfileSwitcherRadio} from './ProfileSwitcherRadio';

interface Props {
    currentProfile: ProfileState;
    setCurrentProfile: (p: ProfileState) => void;
}

export const ProfileSwitcher: React.FC<Props> = ({currentProfile, setCurrentProfile}) => (
    <RadioButtonGroup
        defaultValue={currentProfile}
        onChange={val => setCurrentProfile(val as ProfileState)}
        isInline
        value={currentProfile}
    >
        <ProfileSwitcherRadio value={ProfileState.LENDER}>Lender</ProfileSwitcherRadio>
        <ProfileSwitcherRadio value={ProfileState.BORROWER}>Borrower</ProfileSwitcherRadio>
    </RadioButtonGroup>
);
