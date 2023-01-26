import React from 'react'
import {CiInboxOut} from 'react-icons/ci'

function Outbox() {
  return (
    <div className='outbox'>
        <div className='ou-right'>
    

        </div>
        <div className='ou-left'>
            <div className='ou-text'>Outbox</div>
            <p id='ou-num'>0</p>
            <div className='ou-ellipse'>
                <div className='ou-icon'>
                  <CiInboxOut size='30px'/>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Outbox