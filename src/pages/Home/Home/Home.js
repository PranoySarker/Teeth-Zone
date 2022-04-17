import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Consultation from '../Consultation/Consultation';
import Services from '../Services/Services';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Consultation></Consultation>
            <Footer></Footer>
        </div>
    );
};

export default Home;