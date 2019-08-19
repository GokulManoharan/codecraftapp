import React from 'react'
import Checkbox from './Checkbox'
import './Checkboxes.css'

function Checkboxes() {
    return (
        <div className="checkBoxes">
            <Checkbox color="#FF4563" checked="true" /> 
            <Checkbox color="#8245E6" />
            <Checkbox color="#4AC0E0" />
            <Checkbox color="#1089EB" />
            <Checkbox color="#C791CD" />
        </div>
    )
}

export default Checkboxes