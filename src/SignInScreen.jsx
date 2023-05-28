import React from 'react'
import './SignInScreen.css'

const SignInScreen = () => {
    const register = (e) => {
        e.preventDefault()
    }

    const signuplink = (e) =>{
        e.preventDefault()
    }
  return (
    <div className='signupscreen'>
     <form>
     <h1>Sign In</h1>
      <input type="email" placeholder='Email address' />
      <input type="password" placeholder='Password' />
      <button onClick={register}>Sign In</button>
      <h4>
        <span className='newsignup'>New to Netflix?</span>
          <span className='signup_link' onClick={signuplink}> Sign Up now.</span>
          </h4>
     </form>
    </div>
  )
}

export default SignInScreen