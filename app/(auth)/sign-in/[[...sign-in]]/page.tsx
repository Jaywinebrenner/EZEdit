// import React from 'react'
// import {SignIn} from '@clerk/nextjs'

// const SignInPage = () => {
//   return (
//     <div className='sign-in'>
    
//     <div><p style={{color: "rgba(0, 0, 0, 0.65)"}}>Welcome to</p><h1 className='h1-semibold'>EZEdit</h1></div>
//     <p style={{marginBottom: "32px",color: "rgba(0, 0, 0, 0.65)"}}>Please sign up to begin FREE AI image manipulation</p>
//     <SignIn/>
//   </div>
//   )
// }

// export default SignInPage

import React from 'react'
import {SignIn} from '@clerk/nextjs'

const SignInPage = () => {
  return <SignIn/>

}

export default SignInPage