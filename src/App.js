import React from 'react';
import './App.css';
import Navbar from './components/NAVBAR/Navbar';
import { Routes, Route } from 'react-router-dom'
import Contact from './pages/CONTACTS/Contact';
import Help from './pages/HELP/Help';
import Footer from './components/FOOTER/Footer';
import PokemonPage from './pages/POKEMONPAGE/PokemonPage';
import ErrorBoundary from './components/ErrorBoundary';
import MainPage from './pages/MAINPAGE/MainPage';

function App() {
  
  return (
    <div>
      <Navbar />
      <ErrorBoundary>
        <Routes>
          <Route path='/' element={ <MainPage /> }/>
          <Route path='/help' element={ <Help /> }/>
          <Route path='/contacts' element={ <Contact /> } />
          <Route path='/:id' element={ <PokemonPage /> } />
        </Routes>
      </ErrorBoundary>
      <Footer />
    </div>
  );
}


export default App
