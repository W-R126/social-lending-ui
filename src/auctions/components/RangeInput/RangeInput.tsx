import * as React from 'react';
import {
    FormLabel,
    Grid,
    GridItem,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Slider,
    SliderFilledTrack,
    SliderThumb,
    SliderTrack,
} from '@chakra-ui/react';
import {maxInputValue, minInputValue, step} from './RangeInput.constants';

interface Props {
    name: string;
    onChange: (name: string, value: number) => void;
    value: number;
    title: string;
}

export const RangeInput: React.FC<Props> = ({name, title, onChange, value}) => {
    return (
        <Grid mt={2} templateRows="repeat(2, 1fr)" templateColumns={['repeat(3, 1fr)', 'repeat(5, 1fr)']}>
            <GridItem colSpan={[2, 4]}>
                <FormLabel>{title}</FormLabel>
            </GridItem>
            <GridItem>
                <NumberInput
                    onChange={val => onChange(name, Number(val))}
                    value={value}
                    max={maxInputValue}
                    min={minInputValue}
                    step={step}
                >
                    <NumberInputField name="rangeInputNumberInput" />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </GridItem>
            <GridItem colSpan={[3, 5]}>
                <Slider min={minInputValue} max={maxInputValue} onChange={val => onChange(name, val)} name={name} value={value} step={step}>
                    <SliderTrack>
                        <SliderFilledTrack name="percentageSlider" />
                    </SliderTrack>
                    <SliderThumb />
                </Slider>
            </GridItem>
        </Grid>
    );
};
