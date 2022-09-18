import styles from "@/styles/footer.module.scss";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Contact : contact@capeuttoujoursservir.fr • 06 95 96 28 87</p>
            <p>Développement Web : Tom de Pasquale • <a href="https://github.com/TomDep/ca-peut-toujours-servir">code source</a></p>
            <p>Création typographique : Emilien Serault</p>
        </footer>
    )
}