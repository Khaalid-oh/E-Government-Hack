import React from 'react'
import { NewCorresData } from './NewCorresData'


function NewCorres() {
    return (
        <div className='corres'>
            <ul className='corresList'>
            {NewCorresData.map((val, key) => {
            return(
                <li key={key} className='row-3'
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

export default NewCorres