import styles from './handburger-menu.module.scss';

import { useState } from 'react';

export default function HandburgerMenu({ children }) {

    const [activated, setActivated] = useState(false);

    return (
        <>
            <a className={`${styles["hamburger-icon"]}  ${activated ? styles["active"] : ""}`} href="#" title="Menu" onClick={() => setActivated(activated => !activated)}>
                <span className={`${styles["line"]} ${styles["line-1"]}`}></span>
                <span className={`${styles["line"]} ${styles["line-2"]}`}></span>
                <span className={`${styles["line"]} ${styles["line-3"]}`}></span>

                <span className={styles.text}></span>
            </a>

            {activated && (
                <div className={`${styles["menu-container"]} ${activated ? styles["active"] : ""}`}>
                    {children}
                </div>
            )}
        </>
    )
}