import React from 'react'
import './Title.css'

function Title(props) {
    return (
        <div className="title">
            <h4>{props.title}</h4>
        </div>
    )
}

export default Title