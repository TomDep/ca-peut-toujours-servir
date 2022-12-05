import styles from '@/styles/article_components/image.module.scss';

export default function Image( { src, alt, description }) {

    return (
        <div className={styles.container}> 
            <img className={styles.image} src={src} alt={alt} />

            { (description != null) && (
                <p className={styles.description}>{description}</p>
            )}
        </div>
    );
}