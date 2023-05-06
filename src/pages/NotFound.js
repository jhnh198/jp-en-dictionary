import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function NotFound(){
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/", {state: "Error: Page Not Found"})
        }, 1000)
    }, [])

    return <h1> Not Found </h1>
}

export default NotFound;