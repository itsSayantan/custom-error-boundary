/**
 * This file is just to demonstrate the usage of this library
 */

import React from 'react';

import { DividerProps } from './model';

import './App.scss';
import CEB from '@Components/CEB/CEB';

const App = (): JSX.Element => {
    return (
        <CEB fallbackUI={CustomFallbackUI}>
            <Divider dividend={6} divisor={0} />
        </CEB>
    );
};

const Divider = (props: DividerProps): JSX.Element => {
    const result = props?.dividend / props?.divisor;
    const errorSuffixString =
        'Please check your inputs, both the props: dividend and divisor should be sent and make sure the divisor is not 0.';

    if (isNaN(result)) {
        throw new Error('Result should be a number: ' + errorSuffixString);
    } else if (result === Infinity) {
        throw new Error('Result cannot be Infinity: ' + errorSuffixString);
    }

    return <p>The result after divion is: {result}</p>;
};

const CustomFallbackUI = (): JSX.Element => {
    return <p>Custom fallback UI</p>;
};

export default App;
