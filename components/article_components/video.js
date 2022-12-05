import styles from "@/styles/article_components/video.module.scss";

export default function Video( { src, title, description } ) {
    return (
        <div className={styles.container}>
            { (title != null) && (
                <h3 className={styles.title}>{title}</h3>
            )}

            <video className={styles.video} controls>
                <source src={src} type="video/mp4"></source>
            </video>   

            { (description != null) && (
                <p className={styles.description}>{description}</p>
            )}
        </div>
    );
}