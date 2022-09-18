import CustomHead from "@/components/customHead";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Layout from "@/components/layout";

import Link from "next/link";

import { getProjectsProperties } from "@/lib/projects.js";

import styles from "@/styles/company.module.scss";

export async function getStaticProps({ params }) {

    const projects = getProjectsProperties();

    return {
        props: {
            projects
        }
    };
}

export default function Company({ projects }) {
    return (
        <>
            <CustomHead>La Compagnie</CustomHead>
            <Header projects={projects}></Header>

            <Layout>
                <section className={styles.head}>
                    <h1 className={styles.title}>La Compagnie</h1>
                    <p>
                        Fondée en 2022, la compagnie Ça Peut Toujours Servir est une compagnie émergente lyonnaise. 
                        La création se fait horizontalement au sein de l’équipe, ce qui renforce sa pluridisciplinarité. 
                        Nous venons du milieu de la technique et nous voulons mettre à profit d’un discours poétique des dispositifs techniques poussés.
                        Nous nous intéressons aux mouvements et à la manipulation de matières sonores, lumineuses et plastiques.
                    </p>
                    <p>
                        Les objets n&apos;ont pas dit leurs derniers mots !
                    </p>
                </section>
                <section className={styles.people}>
                    <div className={styles.presentation}>
                        <div className={styles.text}>
                            <h2>Jean Geudré</h2>
                            <p>
                                Formé à l&apos;ENSATT en création son, il se passionne pour les dispositifs mécaniques et sonores à travers la 
                                récupération d&apos;objets ainsi que pour la musique électronique. Les interactions entre ces deux disciplines 
                                sont au coeur de son travail de création. La mise en jeu de ces outils en temps réel pour le spectacle vivant
                                mais aussi les arts plastiques l&apos;intéressent particulièrement.
                            </p>
                            <p>
                                Par ailleurs sa pratique musicale le rapproche de la noise, de l&apos;ambient et de la techno. Dans cette perspective,
                                il travaille régulièrement avec Groupe Nuits, compagnie de danse pour laquelle il compose de la musique. 
                                Il a également collaboré avec Jean-Pierre Larroche sur ces deux dernières créations. Cette expérience lui a donné
                                le goût du théâtre d&apos;objets et de la bidouille.
                            </p>
                        </div>
                        <img src="res/jean.jpg" />
                    </div>

                    <div className={styles.presentation}>
                        <img src="res/theo.jpg" />

                        <div className={styles.text}>
                            <h2>Théo Rodriguez-Noury</h2>
                            <p>
                                Musicien et passionné de son, il commence son parcours musical par la guitare acoustique suivie de l&apos;électrique 
                                et ses nombreux effets qui l&apos;accompagnent. Baigné dans le blues et le rock depuis son enfance, 
                                il a une affection particulière pour le rock psychédélique, post-rock. Le monde du sonore l’aimante
                                et il n&apos;hésitera pas à côtoyer l&apos;expérimental pour agrémenter son jeu jusqu&apos;à aller aux frontières de la noise.
                            </p>
                        </div>
                    </div>

                    <div className={styles.presentation}>
                        <div className={styles.text}>
                            <h2>Adèle Romieu</h2>
                            <p>
                                Formée à la régie pour le théâtre, elle approfondit ses connaissances historiques et artistiques en licence
                                art du spectacle. Puis sa rencontre avec la compagnie de marionnettes Les Anges Au Plafond lui apprend
                                le travail de scénographe et de machiniste. Elle co-signe la scénographie avec Brice Bertoud du Bal 
                                Marionnettique et du Necessaire Déséquilibre des Choses, spectacles qu&apos;elle suit en tournée en régie plateau.
                                Elle y découvre une nouvelle approche de la scène : la scénographie manipulée pensée comme une marionnette.
                                Le travail des objets et de leurs mouvements au plateau sont au cœur de ses recherches.
                            </p>
                        </div>

                        <img src="res/adele.jpg" />
                    </div>

                    <div className={styles.presentation}>
                        <img src="res/louis.jpg" />

                        <div className={styles.text}>
                            <h2>Louis de Pasquale</h2>
                            <p>
                                Après un DMA en régie lumière, Louis de Pasquale poursuit sa formation en conception lumière à l&apos;ENSATT. 
                                Il travaille en étroite collaboration avec des concepteur.ices sonores et crée des dispositifs où le son
                                et la lumière interagissent, pour chercher de nouvelles formes d’écritures interdisciplinaires. Cet intérêt
                                le mène à l&apos;écriture d’un mémoire de recherche sur les dispositifs audio-lumineux dans le spectacle vivant.
                            </p>
                            <p>
                                En parallèle, il travaille depuis 2016 en tant que régisseur et concepteur lumière pour le spectacle vivant.
                                Aujourd&apos;hui son travail de création s&apos;oriente vers le théâtre et les écritures contemporaines qui donnent une
                                place importante à la communication non verbale (La Muse en circuit, Le Collectif Odradek). Ce qui le conduira
                                à accompagner différents projets de théâtre d’objet, d’images et de marionnettes. Il collabore régulièrement
                                avec la compagnie Les Anges au Plafond.
                            </p>
                        </div>
                    </div>
                </section>

                <div className={styles.resources}>
                    <Link href={"/agenda"}>
                        <a className="see-more">Voir les prochaines dates</a>
                    </Link>

                    <Link href={"/projets"}>
                        <a className="see-more">Découvrir les créations</a>
                    </Link>
                </div>
            </Layout>

            <Footer></Footer>
        </>
    )
}