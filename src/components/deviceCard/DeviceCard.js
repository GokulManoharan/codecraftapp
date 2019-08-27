import React from 'react'
import './DeviceCard.css'
import '../../resources/css/animate.css'
import deviceCardStyle from './DeviceCardStyle'

import bedLamp from '../../resources/images/lamp.png'
import ac from '../../resources/images/ac.png'
import lock from '../../resources/images/lock.png'
import tv from '../../resources/images/tv.png'

class DeviceCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            deviceCard : deviceCardStyle.deviceCard(false),
            deviceCardImage : deviceCardStyle.deviceCardImage(),
            deviceImage : deviceCardStyle.deviceImage(false),
            isImageClicked : false,
            animateImage : (isClicked) => {
                if(isClicked){
                    return "animated fadeInLeft"
                }
                else{
                    return "animated fadeInRight"
                }
            },
            animateCard : (isClicked) => {
                if(isClicked){
                    return "animated fadeInRight"
                }
                else{
                    return "animated fadeInLeft"
                }
            }
        }
    }

    imageUrl = (device) => {
        if(device=="bed lamp"){
            return bedLamp
        }
        if(device=="noria ac"){
            return ac
        }
        if(device=="door lock"){
            return lock
        }
        if(device=="lg tv"){
            return tv
        }
        }

    handleImageClick = (isClicked) => {
        this.setState((prevState) => {
            return {
                deviceImage : deviceCardStyle.deviceImage(isClicked),
                deviceCard:   deviceCardStyle.deviceCard(isClicked),
                isImageClicked : !prevState.isImageClicked
            }
        })
    }
    render(){
        return (
            <div style={{"position":"relative"}}>
            <div className="deviceCard"
            // style={this.state.deviceCard} className={this.state.animateCard(this.state.isImageClicked)} id="deviceCard"
             >
                <div className="deviceName" id="deviceName">
                    <h4>{this.props.deviceName}</h4>
                    <p>{this.props.whereTo}</p>
                </div>
                
            </div>
            <div style={this.state.deviceImage} className={this.state.animateImage(this.state.isImageClicked)} id="deviceImage" >
            <a href="#" onClick= {(e) => {
                e.preventDefault()
                this.handleImageClick(!this.state.isImageClicked)
            }} >
                <img src={this.imageUrl(this.props.deviceName)} alt="Product image" style={this.state.deviceCardImage} id="deviceCardImage" />
            </a>
        </div>
        </div>
        )
    }
    
}


export default DeviceCard