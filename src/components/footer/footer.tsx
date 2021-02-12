import * as React from 'react';

import styles from './footer.module.scss';

export const Footer = () => {
    return <footer className={styles.footer}>
        <div className={[styles.content, styles.hasTextCentered].join(' ')}>
            Copyright &#169; 2021, Alex Miller.
            <br/>
            Source code licensed under TBC.
            <br/>
            Website content and documentation licensed under <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a>.
            <br/>
            <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style={{borderWidth:0}} src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a>
        </div>
    </footer>
}