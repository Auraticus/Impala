import styles from "./image.module.css";

export default function Image({ image }) {
    return (
        <>
            <img src={image} alt="image" className={`${styles.image} ${styles.newClass}`} />
        </>
    )
}