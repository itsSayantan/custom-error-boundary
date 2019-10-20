import React, { Component } from 'react';
import './CEB.css';

class CEB extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo)
    }

    render() {
        const nativeFallbackUI = (
            <p className="native-fallback-ui">
                Some error occured here...
            </p>
        );

        const fallbackUI = this.props.fallbackUI ? (
            this.props.fallbackUI()
        ) : nativeFallbackUI;

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
