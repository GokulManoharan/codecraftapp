import React from 'react'
import './Devices.css'
import plusDk from '../../resources/images/plus-dk.png'

function Devices() {
    return(
        <div className="devices">
            <h1>Devices</h1>
            <div className="plusDk">
             <img src={plusDk} />
            </div>
        </div>
    )
}

export default Devices