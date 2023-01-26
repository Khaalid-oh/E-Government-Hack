import React from 'react'
import {RiDraftFill} from 'react-icons/ri'

function Draft() {
  return (
    <div className='draft'>
        <div className='dr-right'>
    

        </div>
        <div className='dr-left'>
            <div className='dr-text'>Draft</div>
            <p id='dr-num'>4</p>
            <div className='dr-ellipse'>
                <div className='dr-icon'>
                  <RiDraftFill size='30px'/>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Draft