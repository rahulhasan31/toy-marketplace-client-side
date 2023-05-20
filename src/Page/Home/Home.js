import React from 'react';
import Branner from '../Branner/Branner';
import GallerySection from '../GallerySection/GallerySection';
import ShopByCategory from '../ShopByCategory/ShopByCategory';

const Home = () => {
    return (
        <>
           <Branner/>
            <GallerySection/>
            <ShopByCategory/>
        </>
    );
};

export default Home;