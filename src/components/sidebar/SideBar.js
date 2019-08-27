import React from 'react'
import './Sidebar.css'
import backBtn from '../../resources/images/back-wh.png'
import DeviceCard from '../deviceCard/DeviceCard'


function SideBar() {

        return(
            <div className="sideBar">
                <img src={backBtn} className="backBtn" />
                <DeviceCard deviceName="bed lamp" whereTo="In Bedroom" />
                <DeviceCard deviceName="noria ac" whereTo="In Bedroom" />
                <DeviceCard deviceName="door lock" whereTo="In Home Office" />
                <DeviceCard deviceName="lg tv" whereTo="In Living room" />
                <DeviceCard deviceName="bed lamp" whereTo="In Bedroom" />
                <DeviceCard deviceName="noria ac" whereTo="In Bedroom" />
            </div>
        )
    
}

export default SideBar