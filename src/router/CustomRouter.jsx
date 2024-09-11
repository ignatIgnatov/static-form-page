import React from 'react'
import { Route, Routes } from 'react-router'
import ContactPage from '../component/ContactPage/ContactPage'
import SuccessfulMessagePage from '../component/SuccessfulMessagePage/SuccessfulMessagePage'
import ErrorMessage from '../component/ErrorMessage/ErrorMessage'

const CustomRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<ContactPage />} />
            <Route path='/success' element={<SuccessfulMessagePage />} />
            <Route path='/error' element={<ErrorMessage />} />
        </Routes>

    )
}

export default CustomRouter