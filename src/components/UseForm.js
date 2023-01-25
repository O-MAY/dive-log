import React from 'react'
import { useForm } from "react-hook-form";
import {Link} from 'react-scroll'

export default function UseForm({ onAdd }) {

const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    onAdd(data)
    console.log('Submit button pressed.');
  };

  return (
    <div id='add-dive-form'>
        <h1>UseForm</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>DIVE SITE:</label>
                <input {...register("diveSite", { required: true })}
                    className='form-field' 
                    type='text' 
                    placeholder='' 
                />
               <p style={{color: "red"}}>
                  {errors.diveSite?.type === "required" && "Field is required."}
                </p>    
            </div>
            <div>
                <label>LOCATION:</label>
                <input {...register("location", { required: true })}
                    className='form-field' 
                    type='text' 
                    placeholder='' 
                />
                <p style={{color: "red"}}>
                  {errors.location?.type === "required" && "Field is required."}
                </p>
            </div>
            <div>
                <label>IMAGE:</label>
                <input {...register("img", { required: false })}
                className='form-field' 
                type='file' 
                placeholder='' 
                />
            </div>
            <div>
                <label>SIGHTED:</label>
                <textarea {...register("sighted", { required: true, maxLength: 120 })}
                className='form-field' 
                type='text' 
                placeholder='' 
               />
               <p style={{color: "red"}}>
                  {errors.sighted?.type === "required" && "Field is required."}
                  {errors.sighted?.type === "maxLength" && "Maximum character length is 120."}
                </p>
            </div>
            <div>
                <label>DIVE TIME:</label>
                <span><input {...register("diveTime", { required: true, max: 9725 })}
                className='form-field form-number-input' 
                type='number' 
                placeholder='' 
                /> minutes</span>
                <strong><p style={{color: "red"}}>
                  {errors.diveTime?.type === "required" && "Dive is required."}
                  {errors.diveTime?.type === "max" && "Wow there! Your dive time was longer than the world record.. Try again."}
                </p></strong> 
            </div>
            <div>
                <label>MAX DEPTH:</label>
                <span><input {...register("maxDepth", { required: true, max: 11034 })}
                className='form-field form-number-input'
                type='number' 
                placeholder='' 
                maxLength="11,034" 
                size="3" 
                /> metres</span>
                <strong><p style={{color: "red"}}>
                  {errors.maxDepth?.type === "required" && "Dive is required."}
                  {errors.maxDepth?.type === "max" && "The Mariana Trench is 11,034m deep. Are you sure you got your depth correct?"}
                </p></strong>    
            </div>

            <Link to="dives-container" spy={true} smooth={true} offset={-100} duration={500}>
            <button className='cancel-dive-btn'>Cancel</button>
            </Link>
            <input className='add-dive-btn' value='Add Dive' type='submit' />
        </form>
    </div>
  )
}
