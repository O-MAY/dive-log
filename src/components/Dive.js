import React from 'react'

import { ImCross } from "react-icons/im";


const Dive = ({ dive, onDelete }) => {

  return (
    <div className="dive-card">
      <ImCross className='delete-button' onClick={() => onDelete(dive.id)} />
      <h2>{dive.diveSite}</h2>
      <h3>{dive.location}</h3>
      <img src={dive.img} />
      <p><span>SIGHTED: </span>{dive.sighted}</p>
      <p><span>DIVE TIME: </span>{dive.diveTime} minutes</p>
      <p><span>MAX DEPTH: </span>{dive.maxDepth} metres</p>
    </div>
  )
}

export default Dive
