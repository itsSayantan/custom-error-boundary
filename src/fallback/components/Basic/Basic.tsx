import React from 'react';

import { BasicPropsType } from './model';

import './Basic.scss';

const Basic = (props: BasicPropsType): JSX.Element => {
    return (
        <div className="basic-native-fallback-ui-wrapper">
            <p>Some error occured here...</p>
        </div>
    );
};

export default Basic;
