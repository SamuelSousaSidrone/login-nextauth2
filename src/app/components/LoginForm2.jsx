import { doSocialLogin } from "../actions"

import React from 'react'


const LoginForm = () => {
  return (
    <form action={doSocialLogin}> 
        <button className='bg-pink-400 text-white p-1 rounded-md text-lg' type='submit' name='action' value="github">
            Sign In With Github
        </button>

        <button className='bg-black text-white p-1 rounded-md text-lg' type='submit' name='action' value="google">
            Sign In With Google
        </button>
    </form>
  )
}

export default LoginForm