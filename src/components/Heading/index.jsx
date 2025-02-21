import ButtonComponent from "../Button";

export default function HeadingComponent() {
    return (
        <>
            <ButtonComponent />
            {/* You were going to import a component here where it would be best imported on a page instead as this is a seperate component and has nothing to do with the other 
            (If you made a global button however that would be a use case for importing a component in another component) */}
        </>
    )
}