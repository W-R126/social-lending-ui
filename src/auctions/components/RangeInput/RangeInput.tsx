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

/**
 * Parameter definition
 */
interface Props {
    /**
     * Unique identifier of component.
     * Used by formik and it increases
     * accessibility
     */
    name: string;
    /**
     * Function invoked on each change of range input
     * Updates input field
     * @param name
     * @param value
     */
    onChange: (name: string, value: number) => void;
    /**
     * Value selected in input
     */
    value: number;
    /**
     * Title of component
     */
    title: string;
}

/**
 * Custom input component which allows
 * user to input data using slider or
 * input field
 * @param name
 * @param title
 * @param onChange
 * @param value
 * @constructor
 */
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
