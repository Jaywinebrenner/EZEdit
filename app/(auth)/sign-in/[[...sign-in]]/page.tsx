import React from 'react'
import {SignIn} from '@clerk/nextjs'

const SignInPage = () => {
  return (
    <div className='sign-in'>
    
    <div><p>Welcome to</p><h1 className='h1-semibold'>EZEdit</h1></div>
    <p style={{marginBottom: "32px"}}>Please sign up to begin FREE AI image manipulation</p>
    <SignIn/>
  </div>
  )
}

export default SignInPage