
import React, { useEffect, useState } from 'react'
import MainContent from '../components/MainContent';
import MainPage from '../components/MainPage';
import VerticalNavbar from '../components/VerticalNav';



const Home: React.FC = () => {

  useEffect(() => {
    // Fetch data from Flask backend
    fetch('/')  // The URL matches the Flask route
        .then(response => response.json())
        .then(data => {
            setData(data);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            setLoading(false);
        });
  }, []);



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

export default Home;



