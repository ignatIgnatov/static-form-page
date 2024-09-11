import { useEffect } from "react"
import { useNavigate } from "react-router"


const SuccessfulMessagePage = () => {

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/");
        }, 3000)
    }, [])

    return (
        <div className="flex justify-center items-center mt-20">
            <h1 className="p-6 text-2xl rounded-md bg-green-500 font-semibold">Message sent successfully!</h1>
        </div>
    )
}

export default SuccessfulMessagePage