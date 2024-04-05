import React from 'react'
import './Subscribe.css'

const Subscribe = () => {
  return (
    <div className='subscribe'>
        <div className='content'>
            <h2>Join our DeFi Community</h2>
            <form action= "https://getform.io/f/raeqrqxa" method="POST">
                <div className='form-container display-col'>
                    <input type="email" name="email" placeholder='Enter your Email'/>
                    <button className='btn'>Sign Up</button>
                </div>
                <div className='form-container'>
                    <input type='checkbox' /><p>Yes, I agree to recieve email communications from DeFi</p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Subscribe