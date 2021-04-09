declare module 'remark-parse';
declare module 'remark-react';

declare module '*.png';

declare module '*.module.scss' {
    interface ClassNames {
        [className: string]: string
    };
    const classNames: ClassNames;
    export = classNames;
}

declare module '*.scss' {
    interface ClassNames {
        [className: string]: string
    };
    const classNames: ClassNames;
    export = classNames;
}