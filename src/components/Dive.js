import React from 'react'


const Dive = ({ dive }) => {

  return (
    <div className="log-card">
      <h2>{dive.diveSite}</h2>
      <h3>{dive.location}</h3>
      <img className='dive-image' src={dive.img} />
      <p>Wildlife and points of interest spotted: {dive.spotted}</p>
      <p>Dive time: {dive.diveTime} minutes</p>
      <p>Maximum dive depth: {dive.maxDepth} metres</p>
    </div>
  )
}

export default Dive
