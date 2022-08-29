import { getAllProjects } from "../lib/projects"
import { getNews } from "../lib/news";

import Link from "next/link";
import Image from "next/image";
import Header from "../components/header"

export async function getStaticProps() {
  const projects = getAllProjects();
  const news = getNews();

  return {
    props : {
      projects,
      news
    }
  };
}

export default function Home({ projects, news }) {
  return (
    <>
      <Header></Header>
      <main>
        
        <p>
          Nous sommes la Compagnie « Ça Peut Toujours Servir », une jeune cie Lyonnaise. 
          Bienvenue sur notre site concu de nos petites mains pour vous renseigner sur nos spectacles concus de nos petites mains aussi! 
        </p>
        
        { news.length > 0 && (
          <section>
            <h2>Actualités</h2>
            <ul>
              {news.map((n, index) => (
                <li key={index}>{n}</li>
              ))}
            </ul>
          </section>
          )}
        

        <h2>Projets</h2>
          {projects.map(({ id, title, description, illustration }) => (
            <div key={id}>
              <h3>{title}</h3>

              {/* Illustration image */
              illustration ? (
                  <Image src={`/${illustration}`} width="400" height="400"></Image>
              ) : (
                <></>
              )}
              
              {/* Description */}
              {Array.isArray(description) ? (
                description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))
              ) : (
                <p>{description}</p>
              )}

              <Link href={`/projets/${id}`}>
                <a>En savoir plus</a>
              </Link>
            </div>
          ))}

          <h2>Galerie</h2>
          <Link href='/galerie'>
            <a>Accéder à la galerie</a>
          </Link>
      </main>
    </>
  )
}
