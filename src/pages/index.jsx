import ButtonComponent from "../components/Button";
import SimpleSlider from "../components/carousel";
import HeadingComponent from "../components/Heading";
import styles from './pages.module.css';

export default function HomePage() {
    return (
        <>
            <h1 className={styles.HeadingH1}>Impala - Test Github</h1>
            <HeadingComponent />
            <ButtonComponent />
            <SimpleSlider />
        </>
    )
}