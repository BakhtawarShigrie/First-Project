import React from 'react'
import SignInSVG from './img/SignInSVG.svg'

function SignUp() {
  return (
    <>
      <section className='Sign-Up-Section'>
          <div className='signin-intro'>
             <p className='signin-heading'>
                 Register to
             </p>
             <p className='lorem'>
               Lorem, ipsum dolor sit
             </p>
             <p className='recommend'>
               If you don't have an account register <br /> you can <button className='register'>Sign in</button>
             </p>
             
             
             <img src={SignInSVG} />
          </div>
          <div className='signin'>
              <p className='heading'>
                Register
              </p>
              <input className='input-1' type="text" placeholder='Enter Emal or user namne' />
              <input className='input-2' type="text" placeholder='Password' />
              <input className='input-3' type="text" placeholder='User Name' />
              <input className='input-4' type="text" placeholder='Contact Number' />
              <button className='btn'><a href="/"> Register </a></button> 
              <a href="/"> <p className='continue'>or continue with</p> </a>
          </div>
        </section>
    </>
  )
}
export default SignUp;
