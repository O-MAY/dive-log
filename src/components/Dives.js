import React from 'react'

import Dive from './Dive'
import AddDiveButton from './AddDiveButton'

const Dives = ({ dives, onDelete }) => {
  return (
    <div id='dives-container'>
        {dives.map((dive, id) => (
            <Dive 
            key={id}
            onDelete={onDelete}
            dive={dive} 
             />
        ))}
        <AddDiveButton />

    </div>
  )
}

export default Dives
