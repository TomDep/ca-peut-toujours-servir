import CustomHead from "@/components/customHead";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Layout from "@/components/layout";
import { getNews } from "@/lib/news";

import { getProjectsProperties } from "@/lib/projects.js";

import styles from "@/styles/agenda.module.scss";

export async function getStaticProps({ params }) {

    const projects = getProjectsProperties();
    const data = getNews();
    const news = data.news;
    const past = data.past;

    return {
        props: {
            projects,
            news,
            past
        }
    };
}

export default function Agenda({ projects, news, past }) {
    return (
        <>
            <CustomHead title={"Agenda"}></CustomHead>
            <Header projects={projects}></Header>

            <Layout>
                <h1 className={styles.title}>Agenda</h1>

                <hr />

                <ul className={styles.list}>
                {news?.map((item, index) => <li key={index}>{item}</li>)}
                </ul>

                <hr />

                <h2>Événement passés</h2>
                <ul className={styles.list}>
                {past?.map((item, index) => <li key={index}>{item}</li>)}
                </ul>

            </Layout>

            <Footer></Footer>
        </>
    )
}