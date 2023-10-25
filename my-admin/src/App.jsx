/* import React from 'react';
import '../src/App.css';
import Home from './components/pages/index';
import About from './components/pages/about';
import Contact from './components/pages/contact-us';
import FAQ from './components/pages/faq';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Apply from './components/pages/applyNow';

function App() {
  return (
    <>
    <Navbar />
    <Router>
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/faq" component={FAQ} />
        <Route path="/contact-us" component={Contact} />
        <Route path="/applyNow" component={Apply} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
*/

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import { useState } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />;
    </>
  ) 
}

export default App;