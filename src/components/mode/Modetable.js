import React from 'react'
import './Modetable.css'
import tickWhite from '../../resources/images/tick-wh.png'
import dayDk from '../../resources/images/day-dk.png'
import morningWh from '../../resources/images/morning-wh.png'
import nightDk from '../../resources/images/night-dk.png'

function Modetable(props) {
    return (
        <div className="modeTable">
            <table>
                <tr>
                    <td>
                        <img src={props.image}
                        // { ()=> {
                        //     if(props.timeOfDay=="Morning"){
                        //         return {morningWh}
                        //     }
                        //     if(props.timeOfDay=="Day"){
                        //         return {dayDk}
                        //     }
                        //     if(props.timeOfDay=="Night"){
                        //         return {nightDk}
                        //     }
                        //     }
                        // } 
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
            </table>

            {/* <img src={ ()=> {
                if(props.timeOfDay=="Morning"){
                    return morningWh
                }
                if(props.timeOfDay=="Day"){
                    return dayDk
                }
                if(props.timeOfDay=="Night"){
                    return nightDk
                }
            }
                } />
            <p>{props.timeOfDay}</p>
            <p>{props.percentage}</p>
            <img src={tickWhite} /> */}


        </div>
    )
}

export default Modetable