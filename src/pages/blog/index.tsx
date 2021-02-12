import {DefaultLayout} from "../../layouts";
import * as React from "react";

import styles from "./blog.module.scss";

export default () => {
    return <DefaultLayout>
        <main className={styles.section}>
            <h1 className={styles.title}>Sports CRM Blog</h1>
            <h2 className={styles.subtitle}>Under Construction</h2>
        </main>
    </DefaultLayout>
}