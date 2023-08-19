import { useEffect } from 'react';
import { Route,Routes } from 'react-router-dom';
import Aos from 'aos';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/UI/Hero';
import Portfolio from './components/UI/Portfolio';
import Contact from './components/UI/Contact';
import Resume from './components/resume/Resume';

function App() {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Resume />
        <Routes>
        <Route path='/' element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
