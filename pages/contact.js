import CustomHead from "@/components/customHead";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Layout from "@/components/layout";

import { getProjectsProperties } from "@/lib/projects.js";

import styles from "@/styles/contact.module.scss";

export async function getStaticProps({ params }) {

    const projects = getProjectsProperties();

    return {
        props: {
            projects
        }
    };
}

export default function Contact({ projects }) {
    return (
        <>
            <CustomHead>Contact</CustomHead>
            <Header projects={projects}></Header>

            <Layout>
                <h1 className={styles.title}>Contact</h1>

                <hr />

                <ul className={styles.list}>
                    <li>
                        <a href="mailto:contact@capeuttoujoursservir.fr">contact@capeuttoujoursservir.fr</a>
                    </li>
                    <li>
                        <a href="tel:+33695962887">06 95 96 28 87</a>
                    </li>
                </ul>
            </Layout>

            <Footer></Footer>
        </>
    )
}