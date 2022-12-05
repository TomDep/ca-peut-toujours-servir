import styles from '@/styles/article_components/audio.module.scss';

export default function Audio({ src, description }) {

    return (
        <div className={styles.container}>
            <audio controls>
                <source src={src} type="audio/mp3" />
                Your browser does not support the audio element.
            </audio>

            { (description != null) && (
                <p className={styles.description}>{description}</p>
            )}
        </div>
    )
}