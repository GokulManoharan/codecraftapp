import React from 'react';
import SideBar from './components/sidebar/SideBar'
import Devices from './components/devices/Devices'
import Device from './components/device/Device'
import Shades from './components/shades/Shades'
import Mode from './components/mode/Mode'
import './App.css';

function App() {
  return (
    <div className="App">
      <SideBar />
      <Devices />
      <Device />
      <Shades />
      <Mode />
    </div>
  );
}

export default App;
