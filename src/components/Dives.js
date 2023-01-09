import React from 'react'

import Dive from './Dive'

const Dives = ({ dives, onDelete }) => {
  return (
    <div className='dives-container'>
        {dives.map((dive, id) => (
            <Dive 
            key={id}
            onDelete={onDelete}
            dive={dive} 
             />
        ))}
      
    </div>
  )
}

export default Dives
