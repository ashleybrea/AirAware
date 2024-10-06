//import '../src/app2.css';  // or './App.css'
//import "./";

import React from 'react';
// import Header from './components/Header';
//import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import MainPage from './components/MainPage';
//import './App.css';
import VerticalNavbar from './components/VerticalNav';

const App: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Navbar on the left */}
      <VerticalNavbar />

      {/* Main content area */}
      <div className="flex-1 ml-64 p-4 bg-fuchsia-50">
        <div className="rounded-2xl border-8 border-solid border-stone-300 p-4">
         {/*<!<MainPage />*/}
          <MainContent />
        </div>
      </div>
    </div>
  );
}

export default App;