import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Playing from './pages/Playing/Playing';
import Upcomming from './pages/Upcomming/Upcomming';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Popular from './pages/Popular/Popular';
import Details from './pages/Details/Details';
import Header from './components/Header/Header';
import Reviews from './pages/Reviews/Reviews';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/search" element={<Search />} />
      <Route exact path="/popular" element={<Popular />} />
      <Route exact path="/playing" element={<Playing />} />
      <Route exact path="/upcomming" element={<Upcomming />} />
      <Route exact path="/details/:id" element={<Details />} />
      <Route exact path="/reviews/:id" element={<Reviews />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
