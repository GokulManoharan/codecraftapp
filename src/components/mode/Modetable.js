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
                    <td className="tdImage">
                        <img src={imageUrl(props.timeOfDay)}
                        />
                    </td>
                    <td className="tdTimeOfDay">
                        {props.timeOfDay}
                    </td>
                    <td className="tdPercentage">
                        {props.percentage}
                    </td>
                    <td className="tdTick">
                        <img src={tickWhite} /> 
                    </td>
                </tr>
    )
}

export default Modetable