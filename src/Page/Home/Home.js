import React from 'react';
import useTitle from '../../Hook/UseTitle';
import Branner from '../Branner/Branner';
import ExtraSectionCard from '../ExtraSection/ExtraSectionCard';
import ExtraSectionOne from '../ExtraSection/ExtraSectionOne';
import ExtraSectionTeam from '../ExtraSection/ExtraSectionTeam';
import GallerySection from '../GallerySection/GallerySection';
import ShopByCategory from '../ShopByCategory/ShopByCategory';

const Home = () => {
    useTitle("Home")
    return (
        <>
           <Branner/>
            <GallerySection/>
            <ShopByCategory/>
            <ExtraSectionCard/>
            <ExtraSectionOne/>
            <ExtraSectionTeam/>
            
        </>
    );
};

export default Home;