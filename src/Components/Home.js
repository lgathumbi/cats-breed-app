import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import CatCard from './CatCard';

function Home() {
  return (
    <>
     <Header/>
     <main>
        < CatCard/>
        <Form/>
     </main>
     <Footer/>
    </>
  );
}

export default Home;