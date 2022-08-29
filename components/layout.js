import styles from './layout.module.scss';
import Link from 'next/link';

export default function Layout({ children, home }) {
    return (
        <>
        
        {!home && (
            <Link href='/'>
                    <a className={styles.link}>🠐 <span>Retour à l’accueil</span></a>
            </Link>
        )}
        
        <main className={styles.main}>
            { children }
        </main>
        </>
    )
}