export type FallbackUIType = {
    fallbackUI?: (props: any) => JSX.Element;
    children: JSX.Element;
};
export type ThemeType = {
    theme?: string;
    children: JSX.Element;
};

export type CEBPropsType = FallbackUIType & ThemeType;

export type CEBStateType = {
    hasError: boolean;
};

const CEB = (props: CEBPropsType) => JSX.Element;

export default CEB;
