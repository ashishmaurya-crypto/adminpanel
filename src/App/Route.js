import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from '../Component/Login/Login';
import Dashboard from '../Component/Dashboard/Dashboard';
import AboutUs from '../Component/AboutUs/AboutUs';
import Layout from '../Component/Layout/Layout';

export class Router extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <Routes>
                        {/* <Route path='/' element={<Login />} />
                        <Route path='/login' element={<Login />} /> */}
                        <Route element={<Layout/>}>
                            <Route path='/' element={<Dashboard />} />
                            <Route path='/features' element={<AboutUs />} />
                            <Route path='/pricing' element={<AboutUs />} />
                            <Route path='/students' element={<AboutUs />} />
                            <Route path='/about-us' element={<AboutUs />} />
                            <Route path='/contact' element={<AboutUs />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </>
        )
    }
}

export default Router