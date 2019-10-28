import React, { Component } from 'react';

import { defaultTheme } from '../../constants';
import fallback from '../../fallback';

class CEB extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        };

        this.checkProps = this.checkProps.bind(this)
        this.determineNativeFallbackUI = this.determineNativeFallbackUI.bind(this)
    
        this.checkProps(props)
    }

    checkProps(props) {
        if (props) {
            if (props.fallbackUI && props.theme) {
                console.warn(`Both the 'fallbackUI' and the 'theme' props are sent. 'theme' prop will be ignored.`)
            }
        }
    }

    determineNativeFallbackUI(theme = undefined) {
        if (!theme) {
            return fallback[defaultTheme]()
        } else {
            if (!fallback[theme]) {
                console.error(`Invalid 'theme' prop provided. Falling back to the 'Basic' theme. Send a theme from the following list: ${Object.keys(fallback)}`)
                return fallback[defaultTheme]()
            }
            return fallback[theme]()
        }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo)
    }

    render() {
        const fallbackUI = this.props.fallbackUI ? (
            this.props.fallbackUI()
        ) : this.determineNativeFallbackUI(this.props.theme);

        const jsxToBeRendered = this.state.hasError ? (
            fallbackUI
        ) : (
            this.props.children
        );

        return (
            <>
                {jsxToBeRendered}
            </>
        );
    }
}

export default CEB;
