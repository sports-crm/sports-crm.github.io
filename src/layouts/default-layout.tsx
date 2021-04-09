import * as React from 'react';
import {FunctionComponent, PropsWithChildren} from "react";

import {Footer, Navbar} from '../components';

import * as styles from './layout.module.scss';

export const DefaultLayout: FunctionComponent<PropsWithChildren<{}>> = ({children}) => {
    return <div className={styles.defaultLayout}>
        <Navbar/>
        <div className={styles.defaultLayout__content}>
            {children}
        </div>
        <Footer/>
    </div>
}