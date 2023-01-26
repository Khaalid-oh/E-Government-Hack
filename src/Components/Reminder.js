import React from 'react'
import {AiFillBell} from 'react-icons/ai'

function Reminder() {
  return (
    <div className='reminder'>
        <div className='re-right'>
    

        </div>
        <div className='re-left'>
            <div className='re-text'>Reminder</div>
            <p id='re-num'>0</p>
            <div className='re-ellipse'>
                <div className='re-icon'>
                  <AiFillBell size='30px'/>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Reminder