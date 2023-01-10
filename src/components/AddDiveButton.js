import React from 'react'


import { IoIosAddCircle } from 'react-icons/io';
import { GiScubaTanks} from "react-icons/gi";


const AddDiveButton = () => {
  return (
    <div className='add-dive-card'>
        <GiScubaTanks className='scuba-icon' />
        <IoIosAddCircle className='plus-icon'/>
        <text className='add-dive-card-text'>ADD NEW DIVE</text>
    </div>
  )
}

export default AddDiveButton
