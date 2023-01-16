import React from 'react'

import { GiScubaTanks} from "react-icons/gi";

const handleClick = () => {
  console.log('Move user to Log A New Dive')
};


const AddDiveButton = () => {
  return (
    <>
    <div className='add-dive-button-container'>
      <div className='add-dive-card' onClick={handleClick}>
          <GiScubaTanks className='scuba-icon' />
          <text className='add-dive-card-text'>ADD NEW DIVE</text>
      </div>
    </div>
    </>
  )
}

export default AddDiveButton
