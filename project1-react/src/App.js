import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { AppLayout } from './shared/components/layouts/app-layout/app-layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/home';
import { Details } from './pages/details/details';
import { FavoriteTopicsProvider } from './shared/contexts/favorite-topics.context';
import { DarkModeProvider } from './shared/contexts/darkmode.context';





export default function App() {

  return (
    <>
      <DarkModeProvider>
        <FavoriteTopicsProvider>
          <BrowserRouter>
            <AppLayout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details/:id" element={<Details />} />
              </Routes>
            </AppLayout>
          </BrowserRouter>
        </FavoriteTopicsProvider>
      </DarkModeProvider>

    </>
  );
}


