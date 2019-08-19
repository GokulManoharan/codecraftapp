import React from 'react'
import './Device.css'

function Device() {
    return(
        <div className="device">
            <h2>Bed Lamp
                </h2>
            <label class="switch">
                <input type="checkbox" checked />
                <span class="slider round"></span>
            </label>
        </div>
    )
}

export default Device