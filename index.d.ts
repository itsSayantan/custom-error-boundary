import React from 'react';

type FallbackUIType = {
    fallbackUI: (props: any) => JSX.Element;
}
type ThemeType = {
    theme: string;
}

type CEBPropType = FallbackUIType | ThemeType;

declare const CEB: (props: CEBPropType) => JSX.Element;

export default CEB;