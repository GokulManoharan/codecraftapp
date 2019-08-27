import React from 'react';
import SideBar from './components/sidebar/SideBar'
import Devices from './components/devices/Devices'
import Device from './components/device/Device'
import Shades from './components/shades/Shades'
import Mode from './components/mode/Mode'
import Intensity from './components/intensity/Intensity'
import './App.css';
import './queries.css'

function App() {
  return (
    <div className="App">
      <>
        <SideBar />
      </>
      <div className="content">        
        <Devices />
        <Device />
        <Shades />
        <Mode />
        <Intensity />
      </div>
    </div>
  );
}

export default App;
