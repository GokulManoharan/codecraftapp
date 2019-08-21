import React from 'react'
import './Sidebar.css'
import backBtn from '../../resources/images/back-wh.png'
import DeviceCard from '../deviceCard/DeviceCard'
import $ from 'jquery'


class SideBar extends React.Component {

    constructor(props){
        super(props)
        this.state={
            currentScrollHeight : 1
        }
    }
   
    componentDidMount () {      
        window.onscroll =()=>{
         const newScrollHeight = Math.ceil(window.scrollY / 50) *50;
         if (this.state.currentScrollHeight != newScrollHeight){
             this.setState({currentScrollHeight: newScrollHeight})
         }
       }
     }
   
    render(){
        const opacity = Math.min(100 / this.state.currentScrollHeight  , 1)
        return(
            <div className="sideBar" style={{opacity}}>
                <img src={backBtn} className="backBtn" />
                <DeviceCard deviceName="bed lamp" whereTo="In Bedroom" />
                <DeviceCard deviceName="noria ac" whereTo="In Bedroom" />
                <DeviceCard deviceName="door lock" whereTo="In Home Office" />
                <DeviceCard deviceName="lg tv" whereTo="In Living room" />
                <DeviceCard deviceName="bed lamp" whereTo="In Bedroom" />
                <DeviceCard deviceName="noria ac" whereTo="In Bedroom" />
                <DeviceCard deviceName="door lock" whereTo="In Home Office" />
                <DeviceCard deviceName="lg tv" whereTo="In Living room" />
            </div>
        )
    }
}

export default SideBar