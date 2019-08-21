import React from 'react'
import './Mode.css'
import Title from '../title/Title'
import Modetable from './Modetable'

function Mode(props) {
    return (
        <div className="mode" >
         <Title title="Mode" />
         <table className="modeTableDisplay">
            <Modetable timeOfDay="Morning" percentage='50%' className="tableRow" />
            <Modetable timeOfDay="Day" percentage='30%'/>
            <Modetable timeOfDay="Night" percentage='100%'/>
         </table>
        </div>
    )
}

export default Mode