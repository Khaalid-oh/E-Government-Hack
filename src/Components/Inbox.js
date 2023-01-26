import React from 'react'
import {CiInboxIn} from 'react-icons/ci'

function Inbox() {
  return (
    <div className='inbox'>
        <div className='in-right'>
    

        </div>
        <div className='in-left'>
            <div className='in-text'>Inbox</div>
            <p id='in-num'>0</p>
            <div className='in-ellipse'>
                <div className='in-icon'>
                  <CiInboxIn size='30px'/>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Inbox