import React from 'react';
import './App.css';
import About from './components/about/About';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonial/Testimonials';
import Contacts from './components/contact/Contacts';
import Footer from './components/footer/Footer';
import MyScrollup  from './components/scrollup/MyScrollup';
const App = () => {
  return (
     <>
     <Header />
     <main  className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Portfolio />
        <Testimonials />
        <Contacts />
        
     </main>
     <Footer />
     <MyScrollup />
     </>
  )
}
export default App;
