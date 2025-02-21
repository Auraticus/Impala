import { useNavigate } from "react-router-dom"

export default function ButtonComponent({ text }) {
    const navigate = useNavigate();
    const buttonNavigate = (url) => {
        navigate(url);
    }
    return (
        <>
            <button onClick={() => buttonNavigate("/legendaryimpala")}>Enter</button>
        </>
    )
}