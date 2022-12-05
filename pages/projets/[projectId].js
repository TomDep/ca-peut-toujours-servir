import { getProjectData, getProjectsIds, getProjectsProperties } from "@/lib/projects";
import Header from "@/components/header";
import Layout from "@/components/layout";

import styles from "@/styles/[projectId].module.scss";
import CustomHead from "@/components/customHead";
import Link from "next/link";
import Footer from "@/components/footer";

import fs from 'fs';
import path from 'path';

import Audio from "@/components/article_components/audio";
import Image from "@/components/article_components/image";
import Section from "@/components/article_components/section";
import Video from "@/components/article_components/video";

import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
const components = { Audio, Image, Section, Video }

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

    // MDX text - can be from a local file, database, anywhere
    const projectsDirectory = path.join(process.cwd(), 'projects');
    const fullPath = path.join(projectsDirectory, `${params.projectId}.mdx`);
    const source = fs.readFileSync(fullPath, 'utf8');
    
    //const source = 'Some **mdx** text, with a component <Image src="path/to/image" />'
    const mdxSource = await serialize(source)

    return {
        props: {
            projects,
            projectData,
            source : mdxSource
        }
    };
}

export default function Project({ projectData, projects, source }) {
    return (
        <>
            <CustomHead title={projectData.name}></CustomHead>
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

                <div className={styles.container}>
                    <MDXRemote {...source} components={components} />
                </div>

                <div className={styles.resources}>
                    {(projectData.productionFile) && (
                    <a target="_blank" rel="noreferrer" className="see-more" href={projectData.productionFile}>
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
            <Footer></Footer>
        </>
    )
}