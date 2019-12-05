import React, { Component } from 'react';

import { CEBPropsType, CEBStateType, FallbackUIType } from './model';

import constants from '@Constants/index';
import fallback from '@Fallback/index';

class CEB extends Component<CEBPropsType, CEBStateType> {
    constructor(props: CEBPropsType) {
        super(props);

        this.state = {
            hasError: false
        };

        this.checkProps = this.checkProps.bind(this);
        this.determineNativeFallbackUI = this.determineNativeFallbackUI.bind(
            this
        );

        this.checkProps(props);
    }

    checkProps(props: CEBPropsType): void {
        if (props) {
            if (props?.fallbackUI && props?.theme) {
                console.warn(
                    `Both the 'fallbackUI' and the 'theme' props are sent. 'theme' prop will be ignored.`
                );
            }
        }
    }

    determineNativeFallbackUI(theme: string = undefined): FallbackUIType {
        if (!theme) {
            return fallback.get(constants.get('defaultTheme'))();
        } else {
            if (!fallback.get(theme)) {
                console.error(
                    `Invalid 'theme' prop provided. Falling back to the 'Basic' theme. Send a theme from the following list: ${Object.keys(
                        fallback
                    )}`
                );
                return fallback.get(constants.get('defaultTheme'))();
            }
            return fallback.get(theme)();
        }
    }

    static getDerivedStateFromError(error: any): any {
        return { hasError: true };
    }

    componentDidCatch(error: any, errorInfo: any): void {
        console.log(error, errorInfo);
    }

    render(): JSX.Element {
        const fallbackUI = this.props?.fallbackUI
            ? this?.props?.fallbackUI({})
            : this?.determineNativeFallbackUI(this?.props?.theme);

        const jsxToBeRendered = this?.state?.hasError
            ? fallbackUI
            : this.props.children;

        return <>{jsxToBeRendered}</>;
    }
}

export default CEB;
