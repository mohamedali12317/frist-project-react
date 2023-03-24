import React from 'react';

import Header from '../comp/header';
import Footer from '../comp/Footer';
import MainContent from '../comp/mainContent';
import { Helmet } from 'react-helmet-async';

const Home = () => {
 return (
  <div>
       <>
       <Header/>
       <Helmet>
        <title>Landing page</title>
        <meta name="description" content="Landing page" />
      </Helmet>

      <MainContent>    
   
        </MainContent>     

   

    <Footer text="❤️"/>
      
        </>
  </div>
 );
}

export default Home;
