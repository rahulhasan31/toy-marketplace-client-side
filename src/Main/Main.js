import React from 'react';
import { Outlet } from 'react-router-dom';
import FooterSection from '../Shared/Footer/FooterSection';
import Header from '../Shared/Navbar/Header';

const Main = () => {
    return (
        <>
        <Header/>
        <Outlet/>
      <FooterSection/> 
        </>
    );
};

export default Main;