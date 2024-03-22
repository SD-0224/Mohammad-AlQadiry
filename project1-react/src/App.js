import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { AppLayout } from './components/layouts/app-layout/app-layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/home';
import { Details } from './pages/details/details';




export default function App() {

  return (
    <>
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </>
  );
}


