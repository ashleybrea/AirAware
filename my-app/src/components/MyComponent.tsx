import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const MyComponent: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col px-2 pt-2 bg-fuchsia-50 rounded-2xl border-8 border-solid border-stone-300 max-w-[921px]">
      <Header />
      <div className="flex flex-wrap gap-1 self-start max-md:max-w-full">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
};

export default MyComponent;