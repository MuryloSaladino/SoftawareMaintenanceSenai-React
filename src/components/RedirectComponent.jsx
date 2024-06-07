import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const RedirectComponent = () => {

    const navigate = useNavigate()

    useEffect(() => {
        navigate("/products")
    }, [])

    return (
        <div></div>
    )
}

export default RedirectComponent