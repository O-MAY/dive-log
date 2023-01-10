import React from 'react'

import { useState } from 'react'


const AddDive = ({ onAdd }) => {
const [diveSite, setDiveSite] = useState('')
const [location, setLocation] = useState('')
const [sighted, setSighted] = useState('')
const [diveTime, setDiveTime] = useState('')
const [maxDepth, setMaxDepth] = useState('')
        
const onSubmit = (e) => {
    e.preventDefault()
        
    onAdd({ diveSite, location, sighted, diveTime, maxDepth })
        
    setDiveSite('')
    setLocation('')
    setSighted('')
    setDiveTime('')
    setMaxDepth('')
}

  return (
    <div className='add-dive-form'>
        <text className='add-dive-form-title'>LOG A NEW DIVE</text>
      <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>DIVE SITE: </label>
            <input type='text' placeholder='' value={diveSite} onChange={(e) => setDiveSite(e.target.value)} />
        </div>
        <div className='form-control'>
            <label>LOCATION: </label>
            <input type='text' placeholder='' value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>
        <div className='form-control'>
            <label>SIGHTED: </label>
            <input type='text' placeholder='' value={sighted} onChange={(e) => setSighted(e.target.value)} />
        </div>
        <div className='form-control'>
            <label>DIVE TIME: </label>
            <input type='text' placeholder='' value={diveTime} onChange={(e) => setDiveTime(e.target.value)} />
        </div>
        <div className='form-control'>
            <label>MAX DEPTH: </label>
            <input type='text' placeholder='' value={maxDepth} onChange={(e) => setMaxDepth(e.target.value)} />
        </div>

        <input type='submit' value='Cancel' className='btn btn-block' />
        <input type='submit' value='Save Dive' className='btn btn-block' />
        
      
        </form>
    </div>
  )
}

export default AddDive;
