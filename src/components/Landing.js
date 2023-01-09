import React from 'react'

const Landing = () => {
  return (
    
      
    <div style={{ 
        backgroundImage: `url(./images/underwater.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
        }}>
          <div className='landing'>  
            DIVE LOG
            <img className='dive-flag' src='./images/diver-flag.svg' />
          </div>   
    </div>
  )
}

export default Landing