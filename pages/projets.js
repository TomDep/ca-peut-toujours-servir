import CustomHead from "@/components/customHead";
import Footer from "@/components/footer";
import Link from "next/link";
import Header from "../components/header";
import Layout from "../components/layout";
import { getProjectsProperties } from "../lib/projects";

import styles from "./projets.module.scss";

export async function getStaticProps() {
    // Get the projects names and ids
    const properties = getProjectsProperties();

    const projects = properties.map((property) => {
        return {
            id: property.id,
            name: property.name
        }
    })

    console.log(projects)

    return {
        props : {
            projects
        }
    }
}

export default function Projets({ projects }) {
    return (
        <>
            <CustomHead title={"Projets"}></CustomHead>
            <Header></Header>
            <Layout>
                <div className={styles.container}>
                    {projects.map((project, index) => (
                        <Link href={'/projets/' + project.id} key={index}>
                            <a>{project.name}</a>
                        </Link>
                    ))}
                </div> 
            </Layout>
            <Footer></Footer>
        </>
    );
}