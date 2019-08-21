import React from 'react'
import './DeviceCard.css'

import bedLamp from '../../resources/images/lamp.png'
import ac from '../../resources/images/ac.png'
import lock from '../../resources/images/lock.png'
import tv from '../../resources/images/tv.png'

function DeviceCard(props) {
    const imageUrl = (device) => {
        if(device=="bedLamp"){
            return bedLamp
        }
        if(device=="ac"){
            return ac
        }
        if(device=="lock"){
            return lock
        }
        if(device=="tv"){
            return tv
        }
        }


    return (
        <div className="deviceCard">
            <div className="deviceImage">
                <img src={imageUrl(props.deviceName)} alt="Product image" />
            </div>
            <div className="deviceName">

            </div>
        </div>
    )
}


export default DeviceCard