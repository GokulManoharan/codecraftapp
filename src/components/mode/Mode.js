import React from 'react'
import './Mode.css'
import Title from '../title/Title'
import Modetable from './Modetable'

function Mode(props) {
    return (
        <div className="mode" >
         <Title title="Mode" />
         <Modetable />
        </div>
    )
}

export default Mode