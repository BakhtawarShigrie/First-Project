import SignInSVG from './img/SignInSVG.svg';

function SignIn() {
  return (
    <>
        <section className='Sign-in-Section'>
          <div className='signin-intro'>
             <p className='signin-heading'>
                 Sign in to
             </p>
             <p className='lorem'>
               Lorem, ipsum dolor sit
             </p>
             <p className='recommend'>
               If you don't have an account register <br /> you can <button className='sign-in'>Register</button>
             </p>
             
             <img src={SignInSVG} />
          </div>
          <div className='signin'>
              <p className='heading'>
                Sign in
              </p>
              <input className='input-1' type="text" placeholder='Enter Emal or user namne' />
              <input className='input-2' type="text" placeholder='Password' />
              <button className='btn'><a href="/"> SIGN IN </a></button> 
              <a href="/"> <p className='continue'>or continue with</p> </a>
          </div>
        </section>
    </>
  )
}
export default SignIn;
