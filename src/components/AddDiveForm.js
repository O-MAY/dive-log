import React from 'react'

import { useState } from 'react'


const AddDive = ({ onAdd }) => {
const [diveSite, setDiveSite] = useState('')
const [location, setLocation] = useState('')
const [img, setImg] = useState('')
const [sighted, setSighted] = useState('')
const [diveTime, setDiveTime] = useState('')
const [maxDepth, setMaxDepth] = useState('')
        
const onSubmit = (e) => {
    e.preventDefault()
        
    onAdd({ diveSite, location, img, sighted, diveTime, maxDepth })
        
    setDiveSite('')
    setLocation('')
    setImg('')
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
                <label>IMAGE: </label>
                <input type='file' placeholder='' value={img} onChange={(e) => setImg(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>SIGHTED: </label>
                <textarea type='text' placeholder='' value={sighted} onChange={(e) => setSighted(e.target.value)} />
            </div>
            <div className='form-control'>
                <span><label>DIVE TIME: </label>
                <input className='form-number-input' type='number' placeholder='' maxlength="3" size="3" value={diveTime} onChange={(e) => setDiveTime(e.target.value)} />
                <text> minutes</text></span>
            </div>
            <div className='form-control'>
                <span><label>MAX DEPTH: </label>
                <input className='form-number-input' type='number' placeholder='' maxlength="3" size="3" value={maxDepth} onChange={(e) => setMaxDepth(e.target.value)} />
                <text> metres</text></span>
            </div>

            <input type='submit' value='Cancel' className='cancel-dive-btn' />
            <input type='submit' value='Add Dive' className='add-dive-btn' />
        </form>
    </div>
   
  )
}

export default AddDive;
