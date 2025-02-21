//You had 2 imported variables and had given them both the same name causing a conflict in javascript. This would crash the page
import Image from "../components/Image";
import supernatural from "../assets/supernatural.webp";

export default function LegendaryImapa() {
    return (
        <>
            <Image image={supernatural} />
        </>
    )
}