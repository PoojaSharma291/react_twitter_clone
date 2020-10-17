import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';

function App() {
  return (
    //BEM
    <div className="app">
      {/* Sidebar on left*/}
      <Sidebar />
      {/* Feeds in center */}
      <Feed />
      {/* Widgets on Right*/}
      <Widgets />
    </div>
  );
}

export default App;
