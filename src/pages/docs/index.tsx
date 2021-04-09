import * as React from "react";

import {DefaultLayout} from "../../layouts";

import * as styles from "../index.module.scss";

export default () => {
    return <DefaultLayout>
        <main className={styles.section}>
            <h1 className={styles.title}>Docs</h1>
            <h2 className={styles.subtitle}>Coming Soon</h2>
        </main>
    </DefaultLayout>
}