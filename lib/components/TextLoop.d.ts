import React from "react";
import { TransitionStyle } from "@serprex/react-motion";
import { RequestTimeout } from "../utils";
declare type Props = {
    children?: (JSX.Element | string)[];
    interval: number | number[];
    delay: number;
    adjustingSpeed: number;
    springConfig: {
        stiffness: number;
        damping: number;
    };
    fade: boolean;
    mask: boolean;
    noWrap: boolean;
    className?: string;
    onChange?: Function;
};
declare type State = {
    elements: (React.ReactChild | React.ReactFragment | React.ReactPortal)[];
    currentEl: React.ReactChild | React.ReactFragment | React.ReactPortal | undefined;
    currentWordIndex: number;
    wordCount: number;
    currentInterval: number;
};
declare class TextLoop extends React.PureComponent<Props, State> {
    isUnMounting: boolean;
    tickDelay: RequestTimeout;
    tickLoop: RequestTimeout;
    wordBox: HTMLDivElement | null;
    static defaultProps: Props;
    constructor(props: Props);
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props, prevState: State): void;
    componentWillUnmount(): void;
    clearTimeouts(): void;
    willLeave: () => {
        opacity: any;
        translate: any;
    };
    willEnter: () => {
        opacity: 0 | 1;
        translate: number;
    };
    tick: () => void;
    getOpacity(): 0 | 1;
    getDimensions(): ClientRect | DOMRect | {
        width: 0;
        height: 0;
    };
    wrapperStyles: any;
    elementStyles: any;
    getTransitionMotionStyles(): TransitionStyle[];
    render(): JSX.Element;
}
export default TextLoop;
