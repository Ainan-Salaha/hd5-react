import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import React from 'react'
import PComponent from './PComponent';
import HoComponent from './HoComponent/HoComponent'

const RouteS = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<PComponent />} />
                    <Route path='/hoc' element={<HoComponent />} />
                </Routes>

            </BrowserRouter></div>
    )
}

export default RouteS