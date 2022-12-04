import styles from "../styles/project-overview.module.scss";

import Link from "next/link";

import { useRouter } from 'next/router'
import { showLoadingScreen } from '../lib/utility.js';

export default function ProjectOverview({ path, name, illustration, titleImage, linkText }) {
    const router = useRouter();
    const goToProject = event => {
        showLoadingScreen();     

        router.push(path)
    }

    return (
        <div className={styles.container} style={{'backgroundImage': 'url(' + illustration + ')'}} onClick={goToProject}>
            <img className={styles.titleImage} src={titleImage}/>
        </div>
    )
}