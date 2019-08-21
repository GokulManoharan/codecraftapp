import React from 'react'
import './Sidebar.css'
import backBtn from '../../resources/images/back-wh.png'
import DeviceCard from '../deviceCard/DeviceCard'


function SideBar() {
    return(
        <div className="sideBar">
            <img src={backBtn} className="backBtn" />
            <DeviceCard deviceName="bedLamp" />
            <DeviceCard deviceName="ac" />
            <DeviceCard deviceName="lock" />
            <DeviceCard deviceName="tv" />
            <DeviceCard deviceName="bedLamp" />
            <DeviceCard deviceName="ac" />
            <DeviceCard deviceName="lock" />
            <DeviceCard deviceName="tv" />
        </div>
    )
}

export default SideBar