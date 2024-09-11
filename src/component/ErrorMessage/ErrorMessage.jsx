import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

const ErrorMessage = () => {

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/");
        }, 3000)
    }, [])

    return (
        <div className="flex justify-center items-center mt-20">
            <h1 className="p-6 text-2xl rounded-md bg-red-500 font-semibold"> Someting went wrong! Please try again later!</h1>
        </div>

    )
}

export default ErrorMessage