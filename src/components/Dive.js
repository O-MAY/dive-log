import React from 'react'

import { ImCross } from "react-icons/im";


const Dive = ({ dive, onDelete }) => {

  return (
    <div className="log-card">
      <ImCross className='delete-button' onClick={() => onDelete(dive.id)} />
      <h2>{dive.diveSite}</h2>
      <h3>{dive.location}</h3>
      <img className='dive-image' src={dive.img} />
      <p><span className='dive-data-title'>SIGHTED: </span>{dive.spotted}</p>
      <p><span className='dive-data-title'>DIVE TIME: </span>{dive.diveTime} minutes</p>
      <p><span className='dive-data-title'>MAX DEPTH: </span>{dive.maxDepth} metres</p>
    </div>
  )
}

export default Dive
