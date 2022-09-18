import { getProjectData, getProjectsIds, getProjectsProperties } from "@/lib/projects";
import Header from "@/components/header";
import Layout from "@/components/layout";

import styles from "@/styles/[projectId].module.scss";
import CustomHead from "@/components/customHead";
import Link from "next/link";

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
    const projects = getProjectsProperties();

    return {
        props: {
            projects,
            projectData
        }
    };
}

export default function Project({ projectData, projects }) {
    return (
        <>
            <CustomHead>{projectData.name}</CustomHead>
            <Header projects={projects}></Header>
            <Layout>
                <div className={styles.head}>
                    <img src={'../../' + projectData.titleImage} />
                    {
                        Array.isArray(projectData.description) ? (
                            projectData.description.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))
                        ) : (
                            <p>{projectData.description}</p>
                        )
                    }
                    
                </div>

                <div className={styles.container} dangerouslySetInnerHTML={{ __html: projectData.contentHtml }}></div>

                <div className={styles.resources}>

                    {(projectData.productionFile) && (
                    <a target="_blank" className="see-more" href={projectData.productionFile}>
                        Télécharger le dossier de production
                    </a>
                    )}

                    <Link href={"/agenda"}>
                        <a className="see-more">Voir les prochaines dates</a>
                    </Link>

                    <Link href={"/projets"}>
                        <a className="see-more">Découvrir les autres créations</a>
                    </Link>
                </div>
            </Layout>
        </>
    )
}