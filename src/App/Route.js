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
                            <Route path='/orders' element={<Dashboard />} />
                            <Route path='/team-members' element={<Dashboard />} />
                            <Route path='/partners' element={<Dashboard />} />
                            <Route path='/product-listings' element={<Dashboard />} />
                            <Route path='/awards-and-honours' element={<Dashboard />} />
                            <Route path='/about-us' element={<AboutUs />} />
                            <Route path='/payment-info' element={<Dashboard />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </>
        )
    }
}

export default Router