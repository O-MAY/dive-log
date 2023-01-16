import React from 'react'
import {Link} from 'react-scroll'
import { GiScubaTanks} from "react-icons/gi";

const AddDiveButton = () => {

  return (
    <>
    <Link to="add-dive-form" spy={true} smooth={true} offset={50} duration={500}>
    <div className='add-dive-button-container'>
        <div className='add-dive-card'>
            <GiScubaTanks className='scuba-icon' />
            <span className='add-dive-card-text'>ADD NEW DIVE</span>
        </div>
    </div>
    </Link>
    </>
  )
}

export default AddDiveButton
