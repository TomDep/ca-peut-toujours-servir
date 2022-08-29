import Link from "next/link"
import { getAllProjects } from "../lib/projects"

export function getStaticProps() {
    const projects = getAllProjects();

    console.log(projects)

    return {
        props : {
            projects : projects 
        }
    }
}

export default function Galerie( { projects }) {
    return (
        <>
            <Link href='/'>
                <a>Retour à l'accueil</a>
            </Link>

            <h1>Bienvenu dans la galerie</h1>
            <p>Vous pouvez retrouver ici les différentes galeries de photos conrrespondant aux différents projets</p>

            <ul>
                {projects.map((project) => (
                    <li key={project.id}>
                        <Link href={`/galerie/${project.id}`}>
                            <a>{project.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}