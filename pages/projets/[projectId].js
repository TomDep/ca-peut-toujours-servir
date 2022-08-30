import { getProjectData, getProjectsIds } from "../../lib/projects";
import Link from "next/link";
import Header from "../../components/header";
import Layout from "../../components/layout";

import styles from "../../styles/[projectId].module.scss";

export async function getStaticPaths() {
    const ids = getProjectsIds();
    const paths = ids.map((id) => {
        return {
            params: {
                projectId: id
            }
        }
    })

    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const projectData = await getProjectData(params.projectId);
    return {
        props: {
            projectData
        }
    };
}

export default function Project({ projectData }) {
    return (
        <>
            <Header></Header>
            <Layout>
                <div className={styles.head}>
                    <h1>{projectData.name}</h1>
                    <p>{projectData.description}</p>
                </div>

                <p className={styles.infos}>
                {projectData.infos.map((info, index) => (
                    <span key={index}>{info}</span>
                ))}
                </p>

                <p className={styles.credits}>
                    {projectData.credits.map((credit, index) => (
                        <span key={index}>{credit}</span>
                    ))}
                </p>

                <div className={styles.container} dangerouslySetInnerHTML={{ __html: projectData.contentHtml }}></div>
            </Layout>
        </>
    )
}