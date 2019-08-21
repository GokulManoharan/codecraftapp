import React from 'react'
import './Modetable.css'
import tickWhite from '../../resources/images/tick-wh-lt.png'
import dayDk from '../../resources/images/day-dk.png'
import morningWh from '../../resources/images/morning-wh.png'
import nightDk from '../../resources/images/night-dk.png'

function Modetable(props) {
    const imageUrl = (timeOfDay) => {
        if(timeOfDay=="Morning"){
            return morningWh
        }
        if(timeOfDay=="Day"){
            return dayDk
        }
        if(timeOfDay=="Night"){
            return nightDk
        }
        }

    return (
                <tr className="modeRow">
                    <td>
                        <img src={imageUrl(props.timeOfDay)}
                        />
                    </td>
                    <td>
                        {props.timeOfDay}
                    </td>
                    <td>
                        {props.percentage}
                    </td>
                    <td>
                        <img src={tickWhite} /> 
                    </td>
                </tr>
    )
}

export default Modetable