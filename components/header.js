import Link from "next/link"
import HandburgerMenu from "./handburger-menu"

import styles from "./header.module.scss"

export default function Header() {
    return (
        <header className={styles.header}>
            {/* Menu */}
            <nav>
                <HandburgerMenu>
                    <Link href="/compagnie">
                        <a>La compagnie</a>
                    </Link>
                    <Link href="/projets">
                        <a>Projets</a>
                    </Link>
                    <Link href="/galerie">
                        <a>Galerie photo</a>
                    </Link>
                </HandburgerMenu>
            </nav>

            <h1 className={styles.title}>
                <Link href="/">
                    <a>Ça peut toujours servir</a>
                </Link>
            </h1>
        </header>
    )
}