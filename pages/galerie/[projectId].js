import { getAllProjectsIds, getProjectData } from "../../lib/projects";
import { getProjectImages } from "../../lib/gallery";
import Link from "next/link";

export async function getStaticPaths() {
    const projectsIds = getAllProjectsIds();

    const paths = projectsIds.map((projectId) => {
        return {
            params: {
                projectId: projectId
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
    const projectImages = getProjectImages(params.projectId);

    return {
        props: {
            projectData,
            images: projectImages
        }
    };
}

export default function ProjectGallery({ projectData, images }) {
    return (
        <>
            <Link href='/galerie'>
                <a>Retour à la galerie</a>
            </Link>
            <h1>Galerie photo du projet "{projectData.title}"</h1>

            {images.length > 0 ? (
            <>
                <h2>Liste des photos :</h2>
                <ul>
                    {images.map((image) => (
                        <li key={image}>
                            <Link href={`/galerie/${projectData.title}/${image.split('.')[0]}`}>
                                <a>{image}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </>
            ) : (
            <>
                <p>Il n'y a pas encore de photo dans cette galerie.</p>
            </>
            )}
        </>
    )
}