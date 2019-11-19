import React from 'react';

type FallbackUIType = {
    fallbackUI: (props: any) => JSX.Element;
    children: JSX.Element;
}
type ThemeType = {
    theme: string;
    children: JSX.Element;
}

type CEBPropType = FallbackUIType | ThemeType;

declare const CEB: (props: CEBPropType) => JSX.Element;

export default CEB;