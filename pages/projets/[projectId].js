import { getProjectData, getProjectsIds } from "../../lib/projects";
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
    return {
        props: {
            projectData
        }
    };
}

export default function Project({ projectData }) {
    return (
        <>
            <Link href='../..'>
                <a>Retour à la page d&apos;accueil</a>
            </Link>

            <h1>{projectData.title}</h1>

            {projectData.id}

            <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }}></div>
        </>
    )
}