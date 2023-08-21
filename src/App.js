import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './components/Home';
import Services from './components/Services';
import Stories from './components/Stories';
import SignIn from './components/SignIn';
import CreateAccount from './components/CreateAccount';
import Profile from './components/Profile';
import Error404 from './components/Error404';
import ErrorBoundary from './components/ErrorBoundary';
import Save from './components/Save';
import Invest from './components/Invest';
import { SigninContext } from './context/SigninContext';

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState('');
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navigation">
          <button
            className="hamburger"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            {/* icon from Heroicons.com */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <h1>SproutifyTemp</h1>
          <div
            className={`navLinks ${isNavExpanded ? 'show-menu' : 'hide-menu'}`}
          >
            <Link to="/">Home</Link>
            <Link to="/Services">Services</Link>
            <Link to="/Stories">Shop</Link>
            <div className="NavButtons">
              <Link to="/SignIn">
                <button className="NavButton1">Socials</button>
              </Link>
              <Link to="/CreateAccount">
                <button className="NavButton2">Call us</button>
              </Link>
            </div>
          </div>
        </nav>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/Services" element={<Services />}>
              <Route path="Save" element={<Save />} />
              <Route path="Invest" element={<Invest />} />
            </Route>
            <Route path="/Stories" element={<Stories />} />
            <Route
              path="/SignIn"
              element={
                <SigninContext.Provider
                  value={{ username, setUsername, setShowProfile }}
                >
                  {showProfile ? <Profile /> : <SignIn />}
                </SigninContext.Provider>
              }
            />
            <Route path="/Profile" element={<Profile />} />
            <Route path="CreateAccount" element={<CreateAccount />} /> */}
            <Route path="/*" element={<Error404 />} />
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

export default App;
