import Link from "next/link";
import HandburgerMenu from "./handburger-menu";

import styles from "../styles/header.module.scss";

export default function Header({ projects }) {
    return (
        <header className={styles.header}>
            {/* Menu */}
            <nav>
                <HandburgerMenu projects={projects}></HandburgerMenu>
            </nav>

            <h1 className={styles.title}>
                <Link href="/">
                    <a>Ça peut toujours servir</a>
                </Link>
            </h1>
        </header>
    )
}