import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
function App() {
  return (
    //BEM
    <div className="app">
      {/* Sidebar on left*/}
      <Sidebar />
      {/* Feeds in center */}

      {/* Widgets on Right*/}
    </div>
  );
}

export default App;
