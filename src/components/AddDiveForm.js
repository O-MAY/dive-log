import { render } from '@testing-library/react'
import React from 'react'
import { useState } from 'react'
import {Link} from 'react-scroll'


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
    <div id='add-dive-form'>
        LOG A NEW DIVE
        <form onSubmit={onSubmit}>
            <div>
                <label>DIVE SITE: </label>
                <input className='form-field' type='text' placeholder='' value={diveSite} onChange={(e) => setDiveSite(e.target.value)} />
            </div>
            <div>
                <label>LOCATION: </label>
                <input className='form-field' type='text' placeholder='' value={location} onChange={(e) => setLocation(e.target.value)} />
            </div>
            <div>
                <label>IMAGE: </label>
                <input className='form-field' type='file' placeholder='' value={img} onChange={(e) => setImg(e.target.value)} />
            </div>
            <div>
                <label>SIGHTED: </label>
                <textarea className='form-field' type='text' placeholder='' value={sighted} onChange={(e) => setSighted(e.target.value)} />
            </div>
            <div>
                <label>DIVE TIME: </label>
                <span><input className='form-field form-number-input' type='number' placeholder='' maxLength="3" size="3" value={diveTime} onChange={(e) => setDiveTime(e.target.value)} /> minutes</span>
            </div>
            <div>
                <label>MAX DEPTH: </label>
                <span><input className='form-field form-number-input' type='number' placeholder='' maxLength="3" size="3" value={maxDepth} onChange={(e) => setMaxDepth(e.target.value)} /> metres</span>
            </div>

            <Link to="dives-container" spy={true} smooth={true} offset={-100} duration={500}>
            <input className='cancel-dive-btn' type='reset' value='Cancel' />
            </Link>
            <input className='add-dive-btn' type='submit' value='Add Dive' />
        </form>
    </div>
   
  )
}

export default AddDive;
