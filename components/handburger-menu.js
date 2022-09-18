import styles from '@/styles/handburger-menu.module.scss';

import { showLoadingScreen } from '@/lib/utility.js';
import { useState } from 'react';

import Link from 'next/link';

export default function HandburgerMenu({ projects }) {

    const [activated, setActivated] = useState(false);
    const [projectsVisible, setProjectsVisible] = useState(false);

    function toggleProjects(projectsVisible) {

        projectsVisible = !projectsVisible;
        return projectsVisible;
    }

    function toggleMenuActivated(activated) {
        activated = !activated;
        if (!activated) {
            setProjectsVisible(() => false);
        }
        return activated;
    }

    return (
        <>
            <a className={`${styles["hamburger-icon"]}  ${activated ? styles["active"] : ""}`} title="Menu" 
                onClick={() => setActivated(toggleMenuActivated)}>
                <span className={`${styles["line"]} ${styles["line-1"]}`}></span>
                <span className={`${styles["line"]} ${styles["line-2"]}`}></span>
                <span className={`${styles["line"]} ${styles["line-3"]}`}></span>

                <span className={styles.text}></span>
            </a>

            {activated && (
                <div className={`${styles["menu-container"]} ${activated ? styles["active"] : ""}`}>
                    {!projectsVisible ? (
                        <>
                            <Link href="/">
                                <a>Accueil</a>
                            </Link>

                            <Link href="/compagnie">
                                <a>La compagnie</a>
                            </Link>

                            <Link href="/agenda">
                                <a>Agenda</a>
                            </Link>
                            
                            <a onClick={() => setProjectsVisible(toggleProjects)}>Projets</a>
                            
                            <Link href="/contact">
                                <a>Contact</a>
                            </Link>
                        </>
                    ) : (
                        <>
                            {(!projects) ? (<p>There is no projects</p>) : (
                                projects.map((project, index) => (
                                    <Link key={index} href={'/projets/' + project.id} passHref={false}>
                                        <a onClick={() => {
                                            showLoadingScreen();
                                            setActivated(toggleMenuActivated);
                                        }}
                                        className={styles.projectName}>{project.name}</a>
                                    </Link>
                                ))
                            )}

                            <span className={styles.hideProjects} onClick={() => setProjectsVisible(toggleProjects)}>Retour au menu</span>
                        </>
                    )}
                </div>
            )}
        </>
    )
}