import React from 'react'
import { useForm } from "react-hook-form";
import {Link} from 'react-scroll'

export default function UseForm({ onAdd }) {

const successMessage = 'Dive has been logged.'

const { register, handleSubmit, reset, formState: { isSubmitted, errors } } = useForm();
  const onSubmit = (data) => {
    onAdd(data)
    reset()
    console.log(successMessage)
  };

  const onCancel = () => {
    reset()
  }

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
               <strong><p style={{color: "red"}}>
                  {errors.diveSite?.type === "required" && "Field is required."}
                </p></strong>    
            </div>
            <div>
                <label>LOCATION:</label>
                <input {...register("location", { required: true })}
                    className='form-field' 
                    type='text' 
                    placeholder='' 
                />
                <strong><p style={{color: "red"}}>
                  {errors.location?.type === "required" && "Field is required."}
                </p></strong>
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
               <strong><p style={{color: "red"}}>
                  {errors.sighted?.type === "required" && "Field is required."}
                  {errors.sighted?.type === "maxLength" && "Maximum character length is 120."}
                </p></strong>
            </div>
            <div>
                <label>DIVE TIME:</label>
                <span><input {...register("diveTime", { required: true, max: 9725 })}
                className='form-field form-number-input' 
                type='number' 
                placeholder='' 
                /> minutes</span>
                <strong><p style={{color: "red"}}>
                  {errors.diveTime?.type === "required" && "Field is required."}
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
                  {errors.maxDepth?.type === "required" && "Field is required."}
                  {errors.maxDepth?.type === "max" && "The Mariana Trench is 11,034m deep. Are you sure you got your depth correct?"}
                </p></strong>    
            </div>

            <Link to="dives-container" spy={true} smooth={true} offset={-100} duration={500}>
            <input className='cancel-dive-btn' value='Cancel' type="reset" onClick={onCancel} />
            </Link>
            <input className='add-dive-btn' value='Add Dive' type='submit' />
            {isSubmitted.formState ? <p>Hello</p> : ''}
        </form>
    </div>
  )
}
