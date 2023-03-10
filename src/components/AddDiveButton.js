import React from 'react'
import {Link} from 'react-scroll'
import { GiScubaTanks} from "react-icons/gi";

const AddDiveButton = () => {

  return (
    <>
    <Link to="add-dive-form" spy={true} smooth={true} offset={-10} duration={1000}>
    <div className='add-dive-button-container'>
        <div className='add-dive-card'>
            <GiScubaTanks className='scuba-icon' />
            <span className='add-dive-card-text'><h2>ADD NEW DIVE</h2></span>
        </div>
    </div>
    </Link>
    </>
  )
}

export default AddDiveButton
