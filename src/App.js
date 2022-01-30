import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import GuestList from './components/GuestList';
import AddressBook from "./components/AddressBook";
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  return (
    
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route exact path="/" element={<GuestList />} />
        <Route path="addressbook" element={<AddressBook />} />
      </Routes>
   
    </div>
    
    
  );
}

export default App;
