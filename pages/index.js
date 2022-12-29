import { getProjectsProperties } from "../lib/projects"

import styles from "../styles/home.module.scss";

import Link from "next/link";
import Header from "../components/header"
import Layout from "../components/layout";
import ProjectOverview from "../components/project-overview";
import CustomHead from "../components/customHead.js";
import Footer from "@/components/footer";

export async function getStaticProps() {
  const projects = getProjectsProperties();

  return {
    props : {
      projects
    }
  };
}

export default function Home({ projects }) {
  return (
    <>
      <CustomHead title="Accueil"></CustomHead>

      <Header projects={projects}></Header>
      <Layout home>
        
        <section className={styles.company}>
          <p>
			Bienvenue chez nous ! La compagnie « Ça Peut Toujours Servir » est une compagnie émergente Lyonnaise de théâtre d'objet. Nous nous intéressons aux mouvements et à la manipulation de matières sonores, lumineuses et plastiques. Et comme on aime bien fabriquer les choses avec nos petites mains, on a conçu ce site artisanalement pour vous renseigner sur notre univers. Bon voyage !
          </p>

          <Link href='./compagnie'>
            <a className="see-more">Découvrir la compagnie</a>
          </Link>
        </section>
                
        <section className={styles.container}>
            <ProjectOverview path={'./agenda'} name={'Agenda'} titleImage={'./res/agendaTitle.png'} illustration={'./res/agenda.jpg'} linkText={'Voir les prochaines dates'}></ProjectOverview>

            {projects.map(({ id, name, titleImage, illustration }, index) => (
              <ProjectOverview key={index} path={'./projets/' + id} name={name} titleImage={titleImage} illustration={illustration}></ProjectOverview>
            ))}
        </section>
      </Layout>
      <Footer></Footer>
    </>
  )
}
