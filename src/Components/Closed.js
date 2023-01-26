import React from 'react'
import {AiFillCloseCircle} from 'react-icons/ai'

function Closed() {
  return (
    <div className='closed'>
        <div className='cl-right'>
    

        </div>
        <div className='cl-left'>
            <div className='cl-text'>Closed</div>
            <p id='cl-num'>0</p>
            <div className='cl-ellipse'>
                <div className='cl-icon'>
                  <AiFillCloseCircle size='30px'/>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Closed