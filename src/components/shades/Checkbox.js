import React from 'react'
import './Checkbox.css'

function Checkbox(props) {
    return (
        <label class="container">
            <input type="checkbox" checked={props.checked && 'checked'} />
            <span class={props.checked ? 'checkmark-checked' : 'checkmark'} style={{"backgroundColor" : props.color}}></span>
        </label>
    )
}

export default Checkbox