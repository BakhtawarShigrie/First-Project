import React from 'react'
import SignIn from './components/Sign-In/SignIn';
import SignUp from './components/Sign-up/SignUp';
import { useState } from 'react';

const  Header = () => {
  const [Form, setActive] = useState('SignIn');
  return (
    <>
          {Form == 'SignIn' ? (
            <sign-in
            onClick={() => setActive('SignUp')}
            >
            <SignIn />
            </sign-in>
          ) : (
            <register
            onClick={()=> setActive('SignIn')}
            >
              <SignUp />
            </register>
          )}
      
    </>
  )
}
export default Header;

 
