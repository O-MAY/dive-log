import React from 'react'
import { useForm } from "react-hook-form";
import { useState } from 'react';
import {Link} from 'react-scroll'

export default function AddDiveForm({ onAdd }) {

  const [success, setSuccess] = useState ("")
  const successDelay = ms => new Promise(res => setTimeout(res, ms));

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
      onAdd(data)
      reset()
      setSuccess('DIVE HAS BEEN ADDED')
      await successDelay(5000)
      setSuccess('')
    };

    const onCancel = () => {
      reset()
    }

  let successComponent = success && <p>{success}</p>

  return (
    <div id='add-dive-form'>
        <h1>ADD DIVE</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>DIVE SITE:</label>
                <input {...register("diveSite", { required: true })}
                    className='form-field' 
                    type='text' 
                    placeholder='' 
                />
               <strong><p className='error-message'>
                  {errors.diveSite?.type === "required" && "Field is required"}
                </p></strong>    
            </div>
            <div>
                <label>LOCATION:</label>
                <input {...register("location", { required: true })}
                    className='form-field' 
                    type='text' 
                    placeholder='' 
                />
                <strong><p className='error-message'>
                  {errors.location?.type === "required" && "Field is required"}
                </p></strong>
            </div>
            <div>
                <label>IMAGE:</label>
                <input {...register("img", { required: false })}
                className='image-upload form-field' 
                type='file' 
                placeholder='Upload image'
                />
            </div>
            <div>
                <label>SIGHTED:</label>
                <textarea {...register("sighted", { required: true, maxLength: 120 })}
                className='form-field' 
                type='text' 
                placeholder='' 
               />
               <strong><p className='error-message'>
                  {errors.sighted?.type === "required" && "Field is required"}
                  {errors.sighted?.type === "maxLength" && "Maximum character length is 120"}
                </p></strong>
            </div>
            <div>
                <label>DIVE TIME:</label>
                <span><input {...register("diveTime", { required: true, max: 9725 })}
                className='form-field form-number-input' 
                type='number' 
                placeholder='' 
                /> minutes</span>
                <strong><p className='error-message'>
                  {errors.diveTime?.type === "required" && "Field is required"}
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
                <strong><p className='error-message'>
                  {errors.maxDepth?.type === "required" && "Field is required"}
                  {errors.maxDepth?.type === "max" && "The Mariana Trench is 11,034m deep. Are you sure you got your depth correct?"}
                </p></strong>    
            </div>
            <div className='cancel-submit-fb'>
              <Link to="header" spy={true} smooth={true} offset={-50} duration={1000}>
              <input className='cancel-dive-btn' value='Cancel' type="reset" onClick={onCancel} />
              </Link>
              <input className='add-dive-btn' value='Add Dive' type='submit' />
            </div>
        </form>
        <strong className='success-component'>{successComponent}</strong> 
    </div>
  )
}
