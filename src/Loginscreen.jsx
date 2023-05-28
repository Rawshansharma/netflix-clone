import React, { useState } from 'react'
import './Loginscreen.css'
import SignInScreen from './SignInScreen';

const Loginscreen = () => {
const [signIn , setSignIn] =useState(false);
  return (
    <div className='loginscreen'>
      <div className="loginscreen_background">
        <img 
        className='loginscreen_logo'
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
        <button onClick={()=> setSignIn(true)} className='loginscreen_button'>Sign In</button>

        <div className="loginscreen_gradient"></div>
        <div className="loginscreen_body">
          {signIn ? (<SignInScreen/>) : (
            <form> 
           <h1>Unlimited films , TV programmes and more.</h1>
           <h2>Watch anywhere. Cancel at anytime. </h2>
           <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
           <input type="email" placeholder='Email address' />
           <button onClick={() => setSignIn(true)}>Get Started </button>
            
           </form>

          )}
          </div>
             
      </div>
    </div>
  )
}

export default Loginscreen
