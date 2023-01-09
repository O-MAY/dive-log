import React from 'react'

import Dive from './Dive'

const Dives = ({ dives }) => {
  return (
    <div className='dives-container'>
        {dives.map((dive, id) => (
            <Dive 
            key={id}
            dive={dive} />
        ))}
      
    </div>
  )
}

export default Dives
