import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./Home";
import Login from './Login';
import About from './About';
import Contact from './Contact';
import PrivateRoute from './PrivateRoute';
import Products from './Products';


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/> 
        <Route path='/login' element= {<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route
         path='/products'
         element = {
            <PrivateRoute>
                <Products/>
            </PrivateRoute>
         }
        />
      </Routes>
    </div>
  );
;}

export default AllRoutes;
