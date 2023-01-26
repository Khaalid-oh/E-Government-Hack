import React from 'react'
import '../App.css'
import {DashboardData} from './DashboardData'

function Dashboard() {
    return (
        <div className='dashboard'>
            <ul className='dashboardList'>
            {DashboardData.map((val, key) => {
            return(
                <li key={key} className='row-2'
                onClick={()=> {window.location.pathname = val.link}}>
                {" "}
                <div id='icon'>{val.icon}</div> {" "}
                <div id='title'>{val.title}</div>
                </li>
            )   
            })} 
            </ul>
        </div>
  )
}

export default Dashboard